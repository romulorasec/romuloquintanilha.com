import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"

// In-memory rate limit — fallback only. Vercel WAF is the primary rate limit.
// These counters reset per serverless instance, not globally.
const ipWindows = new Map<string, { count: number; resetAt: number }>()

const resend = new Resend(process.env.RESEND_API_KEY)

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
  const now = new Date().toUTCString()
  const userAgent = (req.headers.get("user-agent") ?? "").slice(0, 200)
  const maskedIp = maskIp(clientIp)

  const htmlBody = `
<table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;color:#0D0F12;max-width:600px;width:100%">
  <tr><td style="padding:24px 0 8px"><strong>New quote request</strong></td></tr>
  <tr><td style="padding:4px 0"><strong>Name:</strong> ${escapeHtml(name)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Email:</strong> ${escapeHtml(email)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "—"}</td></tr>
  <tr><td style="padding:4px 0"><strong>Project type:</strong> ${escapeHtml(projectType)}</td></tr>
  <tr><td style="padding:4px 0"><strong>Budget:</strong> ${escapeHtml(budget)}</td></tr>
  <tr><td style="padding:16px 0 4px;border-top:1px solid #D7D4CB"><strong>Message:</strong></td></tr>
  <tr><td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
  <tr><td style="padding:16px 0 4px;border-top:1px solid #D7D4CB;font-size:12px;color:#62665F">
    <strong>Source:</strong> ${sourcePage ? escapeHtml(sourcePage) : "—"}<br>
    <strong>Date:</strong> ${now}<br>
    <strong>IP:</strong> ${maskedIp}<br>
    <strong>User-Agent:</strong> ${escapeHtml(userAgent)}
  </td></tr>
</table>
  `.trim()

  try {
    const { error: resendError } = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL ?? "",
      to: process.env.QUOTE_TO_EMAIL ?? "",
      replyTo: email,
      subject: `New quote request — ${projectType}`,
      html: htmlBody,
    })

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
