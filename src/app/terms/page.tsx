import type { Metadata } from "next"
import { LegalLayout } from "@/components/shared/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service — Rômulo Quintanilha",
  description: "Terms governing the use of romuloquintanilha.com and engagement with Rômulo Quintanilha's freelance design services.",
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 27, 2026">
      <h2>Agreement to Terms</h2>
      <p>
        By accessing romuloquintanilha.com or engaging my freelance design services, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website or my services.
      </p>

      <h2>Services</h2>
      <p>
        I offer freelance web design, brand identity, UX/UI design, and digital strategy services to local businesses and entrepreneurs. Specific deliverables, timelines, pricing, and payment terms for each project are defined in a separate written agreement or proposal signed before work begins.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Upon receipt of full payment, you receive full ownership of the final deliverables created specifically for your project. I retain the right to display the work in my portfolio unless otherwise agreed in writing. All preliminary concepts, drafts, and unused designs remain my property.
      </p>
      <p>
        All content on this website — including text, images, code, and design — is my property and may not be reproduced without written permission.
      </p>

      <h2>Client Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate project information, content, and feedback in a timely manner.</li>
        <li>Ensure you have the rights to any materials (logos, photos, copy) you provide for the project.</li>
        <li>Make payments according to the agreed schedule.</li>
      </ul>

      <h2>Payment Terms</h2>
      <p>
        Payment terms are specified in each project proposal. Typically, projects require a deposit before work begins, with the balance due upon completion. Late payments may result in paused work. Ownership of deliverables transfers only upon receipt of full payment.
      </p>

      <h2>Revisions and Scope</h2>
      <p>
        Each project proposal specifies the number of included revision rounds. Work outside the agreed scope is billed at my standard hourly rate and will be confirmed in writing before proceeding.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may terminate a project agreement with written notice. You are responsible for payment for all work completed up to the termination date. Deposits are non-refundable once design work has commenced.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, I am not liable for indirect, incidental, special, or consequential damages arising from the use of this website or my services. My total liability in any circumstance is limited to the amount paid for the specific service in question.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind. I do not guarantee that business results (sales, conversions, leads) will be achieved through my design work, though I strive for results-focused outcomes for every client.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Mateo County, California.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        I may update these Terms periodically. Continued use of this website after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
    </LegalLayout>
  )
}
