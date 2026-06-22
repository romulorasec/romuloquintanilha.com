"use client"

import { InfoModal } from "@/components/shared/info-modal"
import { ContactForm } from "@/components/forms/contact-form"

interface StartProjectModalProps {
  trigger?: React.ReactNode
  sourcePage?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function StartProjectModal({ trigger, sourcePage, open, onOpenChange }: StartProjectModalProps) {
  return (
    <InfoModal trigger={trigger} title="Start your project" open={open} onOpenChange={onOpenChange}>
      <ContactForm sourcePage={sourcePage} />
    </InfoModal>
  )
}
