import type { Metadata } from "next"
import { LegalLayout } from "@/components/shared/legal-layout"

export const metadata: Metadata = {
  title: "Cookie Policy — Rômulo Quintanilha",
  description: "Information about how romuloquintanilha.com uses cookies and similar tracking technologies.",
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="June 27, 2026">
      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They allow the site to remember preferences, analyze usage patterns, and improve your experience. This policy explains what cookies this site uses and why.
      </p>

      <h2>How This Site Uses Cookies</h2>
      <p>
        This website uses a minimal set of cookies. I do not use advertising cookies or sell data to third parties. The cookies on this site fall into two categories:
      </p>

      <h2>Essential Cookies</h2>
      <p>
        These cookies are necessary for the website to function correctly and cannot be disabled. They include:
      </p>
      <ul>
        <li><strong>Security tokens</strong> — used by Cloudflare Turnstile to prevent spam submissions on the contact form. These are session-only and expire when you close your browser.</li>
        <li><strong>Hosting infrastructure</strong> — Vercel may set functional cookies for routing and load balancing. No personally identifiable information is stored.</li>
      </ul>

      <h2>Analytics Cookies</h2>
      <p>
        I use anonymized analytics to understand how visitors use this site, which pages are most visited, and how to improve the experience. Analytics data is aggregated and does not identify individual users. No cross-site tracking is performed.
      </p>

      <h2>Third-Party Cookies</h2>
      <p>The following third-party services may set cookies on your device:</p>
      <ul>
        <li>
          <strong>Cloudflare Turnstile</strong> — sets a temporary cookie to verify you are a human when submitting the contact form. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s Privacy Policy</a>.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — collects anonymized, aggregated page view data. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.
        </li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling essential cookies may affect the functionality of the contact form.
      </p>
      <p>Instructions for common browsers:</p>
      <ul>
        <li><strong>Chrome</strong> — Settings → Privacy and security → Cookies and other site data</li>
        <li><strong>Safari</strong> — Preferences → Privacy → Manage Website Data</li>
        <li><strong>Firefox</strong> — Settings → Privacy &amp; Security → Cookies and Site Data</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        If you are in the European Economic Area, you have rights under GDPR regarding your personal data. If you are in California, CCPA applies. Since this site uses only minimal, functional cookies and no advertising cookies, your privacy exposure is limited. For any data-related requests, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        I may update this Cookie Policy if the technologies or services used on this site change. Updates will be reflected with a revised &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Cookie Policy, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
    </LegalLayout>
  )
}
