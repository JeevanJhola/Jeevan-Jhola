import { motion } from "framer-motion"

import Navbar from "./components/Landing/Navbar"
import Hero from "./components/Landing/Hero"
import ProblemSection from "./components/Landing/ProblemSection"
import SolutionSection from "./components/Landing/SolutionSection"
import HowItWorks from "./components/Landing/HowItWorks"
import Testimonials from "./components/Landing/Testimonials"
import CTA from "./components/Landing/CTA"
import Footer from "./components/Landing/Footer"
import FAQ from "./components/Landing/FAQ"

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App