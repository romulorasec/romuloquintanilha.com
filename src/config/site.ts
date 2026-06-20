export const siteConfig = {
  name: "Rômulo Quintanilha",
  description: "Conversion-focused web designer helping local businesses get more customers",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  defaultLocale: "en-US",

  locales: {
    "pt-BR": {
      label: "Português Brasil",
      htmlLang: "pt-BR",
      region: "BR",
    },
    "pt-PT": {
      label: "Português Portugal",
      htmlLang: "pt-PT",
      region: "PT",
    },
    "en-US": {
      label: "English United States",
      htmlLang: "en-US",
      region: "US",
    },
    "es-419": {
      label: "Español Latinoamérica",
      htmlLang: "es-419",
      region: "LATAM",
    },
  },

  contact: {
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
  },

  social: {
    instagram: "https://www.instagram.com/romuloquintanilha/",
    facebook: "https://www.facebook.com/romuloquintanilha/",
    twitter: "https://x.com/romuloquintanilha",
    linkedin: "",
    youtube: "",
    tiktok: "",
  },

  openingHours: {
    weekdays: "",
    saturday: "",
    sunday: "",
  },
}
