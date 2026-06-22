"use client"

import { InfoModal } from "@/components/shared/info-modal"
import { ContactForm } from "@/components/forms/contact-form"

interface StartProjectModalProps {
  trigger: React.ReactNode
  sourcePage?: string
}

export function StartProjectModal({ trigger, sourcePage }: StartProjectModalProps) {
  return (
    <InfoModal trigger={trigger} title="Start your project">
      <ContactForm sourcePage={sourcePage} />
    </InfoModal>
  )
}
