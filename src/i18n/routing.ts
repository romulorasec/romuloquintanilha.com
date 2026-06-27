import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "pt-BR", "pt-PT", "es"],
  defaultLocale: "en",
  localePrefix: "always",
})
