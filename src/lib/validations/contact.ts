import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.email("Please enter a valid email address"),
  phone: z.string().max(30).optional().or(z.literal("")),
  projectType: z.enum(["Website", "Redesign", "Branding", "UX/UI", "Other"], {
    error: "Please select a project type",
  }),
  budget: z.enum(["<$1k", "$1k–$3k", "$3k–$7k", "$7k+", "TBD"], {
    error: "Please select a budget range",
  }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be under 2000 characters"),
  sourcePage: z.string().max(100).optional().or(z.literal("")),
  // Honeypot — must be empty
  companyWebsite: z.string().optional(),
  // Cloudflare Turnstile token
  turnstileToken: z.string().min(1, "Please complete the security check"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

// Client-side schema excludes turnstileToken (added right before submit)
export const contactClientSchema = contactSchema.omit({ turnstileToken: true })
export type ContactClientValues = z.infer<typeof contactClientSchema>
