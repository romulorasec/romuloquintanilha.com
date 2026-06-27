import { redirect } from "next/navigation"

// Middleware redirects / → /[detected-locale]. This is a safety fallback only.
export default function RootPage() {
  redirect("/en")
}
