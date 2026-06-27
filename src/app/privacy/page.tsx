import type { Metadata } from "next"
import { LegalLayout } from "@/components/shared/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy — Rômulo Quintanilha",
  description: "How Rômulo Quintanilha collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 27, 2026">
      <h2>Overview</h2>
      <p>
        Rômulo Quintanilha (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or &ldquo;my&rdquo;) operates this website as a freelance web designer based in Menlo Park, California. This Privacy Policy explains how I collect, use, disclose, and safeguard information when you visit romuloquintanilha.com or contact me about my services.
      </p>
      <p>
        By using this site, you agree to the practices described in this policy. If you have questions, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>

      <h2>Information I Collect</h2>
      <p>I may collect the following types of information:</p>
      <ul>
        <li><strong>Contact information</strong> — name, email address, phone number, and company name submitted through the contact form.</li>
        <li><strong>Project details</strong> — information you voluntarily share about your project needs, goals, and budget.</li>
        <li><strong>Usage data</strong> — anonymized analytics such as pages visited, time on site, and browser type, collected via analytics tools.</li>
        <li><strong>Device data</strong> — IP address, browser type, operating system, and referring URLs for security and analytics purposes.</li>
      </ul>

      <h2>How I Use Your Information</h2>
      <p>The information I collect is used solely to:</p>
      <ul>
        <li>Respond to your inquiries and provide project quotes.</li>
        <li>Communicate about ongoing or potential projects.</li>
        <li>Improve this website&apos;s performance and user experience.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <p>I do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

      <h2>Data Storage and Security</h2>
      <p>
        Contact form submissions are processed via Resend, an email delivery service. Messages are transmitted securely and stored only as long as necessary to respond to your inquiry. I use industry-standard security measures to protect your data, but no method of transmission over the internet is 100% secure.
      </p>

      <h2>California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, you have the right to request disclosure of the personal information I have collected about you, request deletion of that information, and opt out of the sale of personal information. I do not sell personal information. To exercise your rights, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>

      <h2>Third-Party Services</h2>
      <p>This site may use the following third-party services, each subject to their own privacy policies:</p>
      <ul>
        <li><strong>Resend</strong> — email delivery for contact form submissions.</li>
        <li><strong>Cloudflare Turnstile</strong> — bot protection on the contact form.</li>
        <li><strong>Vercel</strong> — website hosting and analytics.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        This site uses minimal cookies for functionality and anonymized analytics. See my <a href="/cookies">Cookie Policy</a> for details.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        This website is not directed at children under 13. I do not knowingly collect personal information from children. If you believe a child has submitted information, please contact me to have it removed.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        I may update this Privacy Policy periodically. Changes will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of this site after changes constitutes acceptance of the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy-related questions or requests, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
    </LegalLayout>
  )
}
