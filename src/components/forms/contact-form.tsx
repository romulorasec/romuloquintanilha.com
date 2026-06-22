"use client"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { contactClientSchema, type ContactClientValues } from "@/lib/validations/contact"
import { ContactSuccess } from "@/components/forms/contact-success"

type FormState = "idle" | "submitting" | "success"

interface ContactFormProps {
  sourcePage?: string
  onSuccess?: () => void
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  height: "44px",
  padding: "0 14px",
  fontFamily: "var(--font-sans)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "44px",
  color: "var(--color-text)",
  backgroundColor: "var(--color-surface-raised)",
  border: "1px solid var(--color-border)",
  borderRadius: "4px",
  outline: "none",
  transition: "border-color 200ms ease",
  boxSizing: "border-box",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
  marginBottom: "6px",
}

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "12px",
  color: "#c0392b",
  marginTop: "4px",
}

export function ContactForm({ sourcePage, onSuccess }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle")
  const [submitLock, setSubmitLock] = useState(false)
  const turnstileRef = useRef<TurnstileInstance>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactClientValues>({
    resolver: zodResolver(contactClientSchema),
  })

  const onSubmit = async (data: ContactClientValues) => {
    if (submitLock) return
    setSubmitLock(true)
    setFormState("submitting")

    const token = turnstileRef.current?.getResponse()
    if (!token) {
      toast.error("Please complete the security check.")
      setFormState("idle")
      setSubmitLock(false)
      turnstileRef.current?.reset()
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          sourcePage: sourcePage ?? "",
          companyWebsite: data.companyWebsite ?? "",
          turnstileToken: token,
        }),
      })

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string }
        if (res.status === 429) {
          toast.error("Too many requests. Please try again in a few minutes.")
        } else {
          toast.error(json.error ?? "Something went wrong. Please try again.")
        }
        setFormState("idle")
        setSubmitLock(false)
        turnstileRef.current?.reset()
        return
      }

      setFormState("success")
      reset()
    } catch {
      toast.error("Network error. Please check your connection and try again.")
      setFormState("idle")
      setSubmitLock(false)
      turnstileRef.current?.reset()
    }
  }

  if (formState === "success") {
    return <ContactSuccess onDismiss={onSuccess} />
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        onSubmit={(e) => { void handleSubmit(onSubmit)(e) }}
        noValidate
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.5vh, 16px)", flex: 1, minHeight: 0 }}
      >
        {/* Honeypot — visually hidden, not interactable */}
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            opacity: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <input
            {...register("companyWebsite")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row: Name + Email */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="cf-name" style={labelStyle}>Name *</label>
            <input
              id="cf-name"
              type="text"
              autoComplete="name"
              {...register("name")}
              style={fieldStyle}
              disabled={formState === "submitting"}
            />
            {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="cf-email" style={labelStyle}>Email *</label>
            <input
              id="cf-email"
              type="email"
              autoComplete="email"
              {...register("email")}
              style={fieldStyle}
              disabled={formState === "submitting"}
            />
            {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
          </div>
        </div>

        {/* Row: Phone + Project type */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="cf-phone" style={labelStyle}>Phone / WhatsApp</label>
            <input
              id="cf-phone"
              type="tel"
              autoComplete="tel"
              {...register("phone")}
              style={fieldStyle}
              disabled={formState === "submitting"}
              placeholder="Optional"
            />
          </div>
          <div>
            <label htmlFor="cf-project-type" style={labelStyle}>Project type *</label>
            <select
              id="cf-project-type"
              {...register("projectType")}
              style={{ ...fieldStyle, cursor: "pointer" }}
              disabled={formState === "submitting"}
              defaultValue=""
            >
              <option value="" disabled>Select…</option>
              <option value="Website">Website</option>
              <option value="Redesign">Redesign</option>
              <option value="Branding">Branding</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Other">Other</option>
            </select>
            {errors.projectType && <p style={errorStyle}>{errors.projectType.message}</p>}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="cf-budget" style={labelStyle}>Estimated budget *</label>
          <select
            id="cf-budget"
            {...register("budget")}
            style={{ ...fieldStyle, cursor: "pointer" }}
            disabled={formState === "submitting"}
            defaultValue=""
          >
            <option value="" disabled>Select…</option>
            <option value="<$1k">Under $1,000</option>
            <option value="$1k–$3k">$1,000 – $3,000</option>
            <option value="$3k–$7k">$3,000 – $7,000</option>
            <option value="$7k+">$7,000+</option>
            <option value="TBD">To be discussed</option>
          </select>
          {errors.budget && <p style={errorStyle}>{errors.budget.message}</p>}
        </div>

        {/* Message — flex: 1 makes textarea grow to fill remaining modal height */}
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <label htmlFor="cf-message" style={labelStyle}>Tell me about your project *</label>
          <textarea
            id="cf-message"
            {...register("message")}
            style={{
              ...fieldStyle,
              flex: 1,
              height: "auto",
              minHeight: "60px",
              maxHeight: "none",
              lineHeight: 1.6,
              padding: "10px 14px",
              resize: "none",
            }}
            disabled={formState === "submitting"}
            placeholder="Describe your goals, timeline, and anything else that helps me understand your project…"
          />
          {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
        </div>

        {/* Cloudflare Turnstile */}
        <div>
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
            options={{ theme: "light", size: "normal" }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === "submitting"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            height: "var(--button-height)",
            padding: "0 var(--button-padding-x)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--button-font-size)",
            fontWeight: "var(--button-font-weight)" as React.CSSProperties["fontWeight"],
            letterSpacing: "var(--button-letter-spacing)",
            lineHeight: "var(--button-line-height)",
            color: "var(--button-primary-text)",
            backgroundColor: "var(--button-primary-bg)",
            border: "var(--button-border-width) solid var(--button-primary-border)",
            borderRadius: "var(--button-radius)",
            cursor: formState === "submitting" ? "not-allowed" : "pointer",
            opacity: formState === "submitting" ? 0.7 : 1,
            transition: "opacity 200ms ease",
          }}
        >
          {formState === "submitting" ? (
            <>
              <Loader2 size={15} strokeWidth={1.5} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Send request"
          )}
        </button>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            color: "var(--color-text-muted)",
            lineHeight: 1.5,
            marginTop: "-8px",
          }}
        >
          Your information is only used to respond to your request. No spam, ever.
        </p>
      </motion.form>
    </AnimatePresence>
  )
}
