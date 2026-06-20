"use client"

import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <StackedCircularFooter
      name={siteConfig.name}
      role="Web Designer"
      location="Menlo Park, California"
      email="hello@romuloquintanilha.com"
      phone={siteConfig.contact.phone || undefined}
      twitter={siteConfig.social.twitter || undefined}
      instagram={siteConfig.social.instagram || undefined}
      facebook={siteConfig.social.facebook || undefined}
    />
  )
}
