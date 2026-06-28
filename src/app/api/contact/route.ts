import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"

// In-memory rate limit — fallback only. Vercel WAF is the primary rate limit.
// These counters reset per serverless instance, not globally.
const ipWindows = new Map<string, { count: number; resetAt: number }>()

let _resend: Resend | null = null
function getResendClient(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}

function checkFallbackRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000 // 10 minutes
  const limit = 3

  const entry = ipWindows.get(ip)
  if (!entry || now > entry.resetAt) {
    ipWindows.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= limit) return false
  entry.count++
  return true
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function maskIp(ip: string): string {
  const parts = ip.split(".")
  if (parts.length === 4) return `${parts[0]}.${parts[1]}.x.x`
  // IPv6: mask last 4 groups
  const v6parts = ip.split(":")
  if (v6parts.length > 2) return v6parts.slice(0, 4).join(":") + ":xxxx:xxxx:xxxx:xxxx"
  return "x.x.x.x"
}

export async function POST(req: NextRequest) {
  // Content-Type check
  const contentType = req.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  // Payload size limit — 10 KB
  const contentLength = req.headers.get("content-length")
  if (contentLength && parseInt(contentLength, 10) > 10_240) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 })
  }

  // Origin / Referer validation — exact hostname comparison (not startsWith)
  const allowedOriginEnv = process.env.ALLOWED_ORIGIN ?? ""
  if (process.env.NODE_ENV === "production") {
    const originHeader = req.headers.get("origin") ?? ""
    const refererHeader = req.headers.get("referer") ?? ""

    if (!originHeader && !refererHeader) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    let originOk = false
    let refererOk = false

    try {
      const allowed = new URL(allowedOriginEnv)
      if (originHeader) {
        const o = new URL(originHeader)
        originOk = o.protocol === allowed.protocol && o.hostname === allowed.hostname && o.port === allowed.port
      }
      if (refererHeader) {
        const r = new URL(refererHeader)
        refererOk = r.protocol === allowed.protocol && r.hostname === allowed.hostname && r.port === allowed.port
      }
    } catch {
      // Malformed URL in header — reject
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    if (!originOk && !refererOk) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }
  }

  // Parse body (re-enforce size with text read)
  let body: unknown
  try {
    const text = await req.text()
    if (text.length > 10_240) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 })
    }
    body = JSON.parse(text)
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  // Zod server-side validation
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 })
  }

  const {
    name,
    email,
    phone,
    projectType,
    budget,
    message,
    sourcePage,
    companyWebsite,
    turnstileToken,
  } = parsed.data

  // Honeypot — return fake success without sending
  if (companyWebsite && companyWebsite.trim().length > 0) {
    return NextResponse.json({ success: true })
  }

  // Turnstile siteverify
  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
      }),
    }
  )

  if (!turnstileRes.ok) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 })
  }

  const turnstileData = (await turnstileRes.json()) as { success: boolean }
  if (!turnstileData.success) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 })
  }

  // Fallback in-memory rate limit (per serverless instance)
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (!checkFallbackRateLimit(clientIp)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  // Send email via Resend
  const fromEmail = process.env.QUOTE_FROM_EMAIL
  const toEmail = process.env.QUOTE_TO_EMAIL
  if (!fromEmail || !toEmail) {
    console.error("[contact] Missing env vars: QUOTE_FROM_EMAIL or QUOTE_TO_EMAIL")
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 })
  }

  const d = new Date()
  const now = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) +
    " · " + d.toISOString().slice(11, 16) + " UTC"
  const userAgent = (req.headers.get("user-agent") ?? "").slice(0, 200)
  const maskedIp = maskIp(clientIp)

  const phoneRow = phone
    ? `<table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px">
        <tr>
          <td width="96" style="font-size:10px;color:#A6AB9D;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;padding-top:2px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Phone</td>
          <td style="font-size:15px;color:#0D0F12;font-weight:400;font-family:'Plus Jakarta Sans',Georgia,sans-serif">${escapeHtml(phone)}</td>
        </tr>
      </table>`
    : ""

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#EFEEE8">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#EFEEE8;padding:40px 16px">
  <tr><td align="center">

    <!-- Card -->
    <table cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;border:1px solid #D7D4CB">

      <!-- Dark header -->
      <tr>
        <td style="background:#0D0F12;padding:32px 40px">
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#6F7668;font-weight:500;font-family:'Plus Jakarta Sans',Georgia,sans-serif">
                R&ocirc;mulo Quintanilha &middot; Projects
              </td>
              <td align="right">
                <span style="display:inline-block;font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:#F5F4F0;font-weight:600;font-family:'Plus Jakarta Sans',Georgia,sans-serif;border:1px solid #3A3D41;padding:3px 8px">New Brief</span>
              </td>
            </tr>
          </table>
          <div style="height:22px"></div>
          <div style="font-size:30px;font-weight:300;letter-spacing:-0.025em;line-height:1.1;color:#F5F4F0;font-family:'Plus Jakarta Sans',Georgia,sans-serif">
            New quote request
          </div>
          <div style="margin-top:8px;font-size:13px;color:#6F7668;font-weight:400;letter-spacing:0.01em;font-family:'Plus Jakarta Sans',Georgia,sans-serif">
            ${escapeHtml(projectType)} &middot; ${escapeHtml(budget)}
          </div>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#F5F4F0;padding:36px 40px 0">

          <!-- Section: Client -->
          <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#62665F;font-weight:500;margin-bottom:18px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Client</div>

          <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px">
            <tr>
              <td width="96" style="font-size:10px;color:#A6AB9D;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;padding-top:2px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Name</td>
              <td style="font-size:15px;color:#0D0F12;font-weight:500;font-family:'Plus Jakarta Sans',Georgia,sans-serif">${escapeHtml(name)}</td>
            </tr>
          </table>

          <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px">
            <tr>
              <td width="96" style="font-size:10px;color:#A6AB9D;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;padding-top:2px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Email</td>
              <td style="font-size:15px;color:#0D0F12;font-weight:400;font-family:'Plus Jakarta Sans',Georgia,sans-serif">${escapeHtml(email)}</td>
            </tr>
          </table>

          ${phoneRow}

          <!-- Divider -->
          <div style="border-top:1px solid #D7D4CB;margin:28px 0"></div>

          <!-- Section: Project -->
          <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#62665F;font-weight:500;margin-bottom:18px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Project</div>

          <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px">
            <tr>
              <td width="96" style="font-size:10px;color:#A6AB9D;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;padding-top:2px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Type</td>
              <td style="font-size:15px;color:#0D0F12;font-weight:400;font-family:'Plus Jakarta Sans',Georgia,sans-serif">${escapeHtml(projectType)}</td>
            </tr>
          </table>

          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="96" style="font-size:10px;color:#A6AB9D;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;padding-top:2px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Budget</td>
              <td style="font-size:15px;color:#0D0F12;font-weight:400;font-family:'Plus Jakarta Sans',Georgia,sans-serif">${escapeHtml(budget)}</td>
            </tr>
          </table>

          <!-- Divider -->
          <div style="border-top:1px solid #D7D4CB;margin:28px 0"></div>

          <!-- Section: Message -->
          <div style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#62665F;font-weight:500;margin-bottom:18px;font-family:'Plus Jakarta Sans',Georgia,sans-serif">Message</div>

          <div style="border-left:3px solid #6F7668;padding-left:20px;margin-bottom:36px">
            <div style="font-size:14px;color:#1B1D21;font-weight:400;line-height:1.75;white-space:pre-wrap;font-family:'Plus Jakarta Sans',Georgia,sans-serif">${escapeHtml(message)}</div>
          </div>

        </td>
      </tr>

      <!-- Metadata footer -->
      <tr>
        <td style="background:#E8E7DF;border-top:1px solid #D7D4CB;padding:14px 40px">
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size:10px;color:#A6AB9D;letter-spacing:0.06em;font-family:'Plus Jakarta Sans',Georgia,sans-serif">
                ${sourcePage ? escapeHtml(sourcePage) + " &middot; " : ""}${now} &middot; ${maskedIp}
              </td>
              <td align="right" style="font-size:10px;color:#D7D4CB;letter-spacing:0.04em;font-family:'Plus Jakarta Sans',Georgia,sans-serif">
                ${escapeHtml(userAgent.slice(0, 80))}
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
    <!-- /Card -->

  </td></tr>
</table>
</body>
</html>`.trim()

  try {
    const { error: resendError } = await getResendClient().emails.send(
      {
        from: `Rômulo Quintanilha <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject: `New quote request — ${projectType}`,
        html: htmlBody,
      },
      { idempotencyKey: `contact/${turnstileToken.slice(0, 200)}` }
    )

    if (resendError) {
      console.error("[contact] Resend error:", resendError.name, resendError.message)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] Resend unexpected error:", err instanceof Error ? err.message : "unknown")
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

// Reject all non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
export async function PATCH() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
