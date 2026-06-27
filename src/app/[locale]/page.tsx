import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { HowIWork } from "@/components/sections/how-i-work"
import { About } from "@/components/sections/about"
import { Positioning } from "@/components/sections/positioning"
import { Services } from "@/components/sections/services"
import { Footer } from "@/components/sections/footer"
import { Testimonials } from "@/components/sections/testimonials"
import { Promise } from "@/components/sections/promise"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Positioning />
        <div id="services"><Services /></div>
        <Promise />
        <HowIWork />
        <Testimonials />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
