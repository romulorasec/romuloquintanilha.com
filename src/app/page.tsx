import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { TheProblem } from "@/components/sections/the-problem"
import { HowIWork } from "@/components/sections/how-i-work"
import { Projects } from "@/components/sections/projects"
import { About } from "@/components/sections/about"
import { Positioning } from "@/components/sections/positioning"
import { Services } from "@/components/sections/services"
import { Footer } from "@/components/sections/footer"
import { Testimonials } from "@/components/sections/testimonials"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Positioning />
        <div id="services"><Services /></div>
        <div id="work"><Projects /></div>
        <HowIWork />
        <Testimonials />
        <div id="problem"><TheProblem /></div>
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
