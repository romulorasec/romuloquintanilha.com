"use client"

import { useTranslations, useLocale } from "next-intl"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { siteConfig } from "@/config/site"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const locale = useLocale()

  const navLinks = [
    { label: t("navHome"), href: "#hero" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("services"), href: "#services" },
    // { label: tNav("portfolio"), href: "#projects" },
    { label: tNav("howIWork"), href: "#how-i-work" },
    { label: tNav("testimonials"), href: "#testimonials" },
    { label: t("navContact"), href: "#contact" },
  ]

  const legalLinks = [
    { label: t("privacy"), href: `/${locale}/privacy` },
    { label: t("terms"), href: `/${locale}/terms` },
    { label: t("cookies"), href: `/${locale}/cookies` },
  ]

  return (
    <StackedCircularFooter
      name={siteConfig.name}
      role={t("role")}
      location={t("location")}
      email="hello@romuloquintanilha.com"
      phone={siteConfig.contact.phone || undefined}
      twitter={siteConfig.social.twitter || undefined}
      instagram={siteConfig.social.instagram || undefined}
      facebook={siteConfig.social.facebook || undefined}
      navLinks={navLinks}
      legalLinks={legalLinks}
      workTogetherLabel={t("workTogether")}
      copyright={`© 2026 ${siteConfig.name}. ${t("copyright")}`}
    />
  )
}
