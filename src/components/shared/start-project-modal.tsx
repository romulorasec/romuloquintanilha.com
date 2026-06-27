"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import { InfoModal } from "@/components/shared/info-modal"
import { ContactForm } from "@/components/forms/contact-form"

interface StartProjectModalProps {
  trigger?: React.ReactNode
  sourcePage?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function StartProjectModal({
  trigger,
  sourcePage,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
}: StartProjectModalProps) {
  const t = useTranslations("contact")
  const [internalOpen, setInternalOpen] = useState(false)
  const isExternallyControlled = externalOpen !== undefined

  const open = isExternallyControlled ? externalOpen : internalOpen

  const handleOpenChange = (value: boolean) => {
    if (!isExternallyControlled) setInternalOpen(value)
    externalOnOpenChange?.(value)
  }

  // Uncontrolled mode: InfoModal is always controlled here, so inject
  // the open handler directly into the trigger via cloneElement.
  const triggerElement =
    !isExternallyControlled && trigger && React.isValidElement(trigger)
      ? React.cloneElement(
          trigger as React.ReactElement<{ onClick?: () => void }>,
          { onClick: () => handleOpenChange(true) }
        )
      : null

  return (
    <>
      {triggerElement}
      <InfoModal
        title={t("modalTitle")}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <ContactForm
          sourcePage={sourcePage}
          onSuccess={() => handleOpenChange(false)}
        />
      </InfoModal>
    </>
  )
}
