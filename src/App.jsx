

import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from 'react-router'; // Corrected import for react-router-dom

// Import all your Landing Page components
import Navbar from "./components/Landing/Navbar"
import Hero from "./components/Landing/Hero"
import ProblemSection from "./components/Landing/ProblemSection"
import SolutionSection from "./components/Landing/SolutionSection"
import HowItWorks from "./components/Landing/HowItWorks"
import Testimonials from "./components/Landing/Testimonials"
import CTA from "./components/Landing/CTA"
import Footer from "./components/Landing/Footer"
import FAQ from "./components/Landing/FAQ"
import AboutUs from "./components/Landing/AboutUs"

// Import the new PreHero component
import PreHero from "./components/prelanding/PreHero" // Assuming PreHero is in components/Landing based on previous interactions


// This component groups all the existing main sections of your website
function LandingPage() {
  return (
    <>
      {/* Navbar is typically part of the main layout, but if it's explicitly in your LandingPage, keep it here */}
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <CTA />
      {/* Footer is also typically part of the main layout */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Router>
        <Routes>
          {/* Route for the initial "Pre-Hero" selection page */}
          {/* This assumes your GitHub Pages base path is /Jeevan-Jhola/ */}
          <Route path="/Jeevan-Jhola/" element={<PreHero />} />

          {/* Route for the main website content (Cloth Bag section) */}
          {/* The PreHero will link to this /home path */}
          <Route path="/home" element={<LandingPage />} />

          {/* You can add more routes here for "Relogi" or other branches later */}
          {/* Example for Relogi (once implemented): */}
          {/* <Route path="/relogi" element={<RelogiSection />} /> */}

          {/* Fallback for any other undefined paths (optional but good practice) */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
              <div>
                <h1 className="text-xl font-bold mb-2">Page Not Found</h1>
                <p>The requested page does not exist.</p>
                <p className="text-sm text-gray-400 mt-2">Path: {window.location.pathname}</p>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App