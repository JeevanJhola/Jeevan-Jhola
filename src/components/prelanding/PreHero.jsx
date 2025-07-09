// --- START OF FILE src/components/Landing/PreHero.jsx ---
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { Disclosure } from '@headlessui/react';
import {
  FaLeaf,
  FaHandshake,
  FaBoxOpen,
  FaHandsHelping,
  FaLightbulb,
  FaRocket,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaUsers,
  FaBullhorn,
  FaSeedling,
  FaExclamationTriangle,
  FaQuoteLeft,
  FaGlobe,
  FaBrain,
  FaBox,
  FaPlus,
  FaMinus,
  FaComment,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa";

// FAQ component definition, moved to be accessible by PreHero
const FAQ = () => {
  const faqItems = [
    {
      question: "Is it completely free to use?",
      answer: "Yes! Jeevan Jhola is a community resource. Borrow and return bags at no cost through our partner network."
    },
    {
      question: "Do I need to register or download an app?",
      answer: "No technology required. Simply take a bag from any partner shop and return to any participating store."
    },
    {
      question: "What if I forget to return the bag?",
      answer: "No penalties. We trust our community. When you're done, just pass it to someone else or return when convenient."
    },
    {
      question: "How are the bags cleaned?",
      answer: "We use plant-based sanitizers at collection points. Bags are washed using eco-friendly methods every 5 uses."
    }
  ]

  const [isChatOpen, setIsChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const presetQuestions = [
    "How do I find partner shops?",
    "Can I donate bags?",
    "What materials are used?"
  ]

  return (
    <section id="faq" className="relative py-16 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Floating elements - updated to match PreHero's green theme */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200" // Changed from emerald-200
            initial={{ y: -10, x: Math.random() * 100 }}
            animate={{ y: [0, -20, 0], rotate: [0, 180] }}
            transition={{ duration: 4 + i*2, repeat: Infinity }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            <FaLeaf className="text-4xl" />
          </motion.div>
        ))}
      </div>

      {/* Floating Gradient Blobs - new addition to FAQ to match PreHero */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-green-100/50 to-green-200/50 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-green-100/50 to-green-200/50 rounded-full blur-3xl opacity-40 animate-pulse" />

      {/* Animated Chat Bot - updated colors */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative">
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-green-100" // Changed from emerald-100
            >
              <div className="p-4 bg-green-600 text-white rounded-t-2xl flex items-center"> {/* Changed from emerald-600 */}
                <FaComment className="mr-2" />
                <span className="font-semibold">Jhola Bot</span>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="ml-auto hover:opacity-80"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="p-4 h-64 overflow-y-auto">
                <div className="mb-4 text-sm text-green-600"> {/* Changed from emerald-600 */}
                  Hi! I'm here to help. Choose a question or type your own:
                </div>
                
                {presetQuestions.map((q, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="mb-2 p-2 text-sm bg-green-50 rounded-lg cursor-pointer" // Changed from emerald-50
                    onClick={() => setMessage(q)}
                  >
                    {q}
                  </motion.div>
                ))}
                
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-green-200 rounded-lg text-sm" // Changed from emerald-200
                  />
                  <button className="p-2 bg-green-600 text-white rounded-lg"> {/* Changed from emerald-600 */}
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all" // Changed from emerald-600, emerald-700
          >
            {isChatOpen ? <FaTimes /> : <FaComment className="text-xl" />}
          </button>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="mb-6 inline-flex items-center bg-green-100 px-6 py-2 rounded-full" // Changed from emerald-100
            >
              <FaLeaf className="mr-2 text-green-600" /> {/* Changed from emerald-600 */}
              <span className="text-green-700 font-medium">Community Hub</span> {/* Changed from emerald-700 */}
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-900">
              Connect & Collaborate
            </h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto"> {/* Changed from emerald-600 */}
              Your gateway to India's reusable revolution
            </p>
            {/* Added the horizontal line as requested */}
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Column */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Disclosure>
                    {({ open }) => (
                      <div className="border border-green-100 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-all"> {/* Changed from emerald-100 */}
                        <Disclosure.Button className="flex w-full items-center justify-between p-6 text-left">
                          <span className="text-lg font-medium text-green-800"> {/* Changed from emerald-800 */}
                            {item.question}
                          </span>
                          {open ? (
                            <FaMinus className="text-green-600" /> // Changed from emerald-600
                          ) : (
                            <FaPlus className="text-green-600" /> // Changed from emerald-600
                          )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-6 pb-6 pt-2 text-green-600"> {/* Changed from emerald-600 */}
                          {item.answer}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                </motion.div>
              ))}
            </div>

            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-100 shadow-lg" // Changed from emerald-100
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6"> {/* Changed from emerald-800 */}
                Direct Message
              </h3>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center p-6 bg-green-50 rounded-xl" // Changed from emerald-50
                >
                  <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" /> {/* Changed from emerald-600 */}
                  <p className="text-green-700 font-semibold"> {/* Changed from emerald-700 */}
                    Message received! We'll respond within 24 hours
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-green-700 mb-2">Name</label> {/* Changed from emerald-700 */}
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent" // Changed from emerald-200, emerald-400
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-700 mb-2">Email</label> {/* Changed from emerald-700 */}
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent" // Changed from emerald-200, emerald-400
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-700 mb-2">Message</label> {/* Changed from emerald-700 */}
                    <textarea
                      rows="4"
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent" // Changed from emerald-200, emerald-400
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-green-700 transition-colors" // Changed from emerald-600, emerald-700
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-green-600 mb-4"> {/* Changed from emerald-600 */}
              Prefer email? Write to us at{' '}
              <a href="mailto:hello.jeevanjhola@gmail.com" className="font-semibold hover:underline"> {/* No color change needed as it inherits from parent */}
                hello.jeevanjhola@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const PreHero = () => {
  const manifestoHighlights = [
    { icon: <FaGlobe className="text-green-600" />, quote: "The future belongs to those who carry their values, not just their possessions.", source: "Jeevan Jhola Team" },
    { icon: <FaBrain className="text-green-600" />, quote: "Innovation is not about new things, but about making old things obsolete with better, sustainable choices.", source: "Circular Economy Advocates" },
    { icon: <FaBox className="text-green-600" />, quote: "Every reusable choice is a step towards liberation from waste.", source: "Community Voices" },
    { icon: <FaLeaf className="text-green-600" />, quote: "Sustainability isn't a goal; it's the only path forward. We walk it together.", source: "The Conscious Consumer" },
  ];

  return (
    <>
      
      
      {/* Logo in Hero Section */}
      <section id="pre-hero" className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-green-50 to-white text-green-800 overflow-hidden">
        {/* Logo Decoration in Background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <img 
                src="./Logo-Jevan-Jhola.png" 
                alt="Decorative Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-48 h-48"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.05, 1]
              }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img 
              src="./Logo-Jevan-Jhola.png" 
              alt="Decorative Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Animated Particle Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-green-200/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 80 + 20}px`, /* Slightly smaller for light theme */
                height: `${Math.random() * 80 + 20}px`,
              }}
              animate={{
                y: [0, 50, 0],
                x: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Floating Gradient Blobs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-green-100/50 to-green-200/50 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-green-100/50 to-green-200/50 rounded-full blur-3xl opacity-40 animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              {/* Logo and Title Integration */}
              <div className="flex items-center mb-8">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mr-4 bg-white p-2 rounded-full shadow-lg"
                >
                  <img 
                    src="./Logo-Jevan-Jhola.png" 
                    alt="Jeevan Jhola Logo" 
                    className="h-16 w-auto"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center bg-green-100/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-300/70"
                >
                  <FaLeaf className="mr-3 text-green-500 text-xl" />
                  <span className="font-medium text-green-700">Jeevan Jhola Initiatives</span>
                </motion.div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-green-900">Sustainable Living,</span>
                <motion.span 
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="block mt-2 bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-green-800 to-green-700"
                >
                  Your Way.
                </motion.span>
              </h1>
              
              <p className="text-lg text-green-700 mb-10 max-w-xl">
                "What you carry, carries you." Pioneering India's circular economy, one choice at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/Jeevan-Jhola/home"
                  className="flex items-center justify-center px-8 py-4 rounded-xl bg-green-700 text-white font-semibold shadow-lg hover:bg-green-800 hover:shadow-green-300/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaLeaf className="mr-3 text-xl relative z-10" />
                  <span className="relative z-10">Jeevan Jhola Bags</span>
                </Link>
                
                <button
                  disabled
                  className="flex items-center justify-center px-8 py-4 rounded-xl border-2 border-green-300 text-green-700 font-semibold hover:bg-green-100/50 hover:border-green-400 transition-all duration-300 cursor-not-allowed relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaBoxOpen className="mr-3 text-xl text-green-500 relative z-10" />
                  <span className="relative z-10">Relogi (Coming Soon)</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-200/50 to-green-300/50 rounded-2xl rotate-3 animate-pulse"></div>
                <div className="relative bg-white/70 backdrop-blur-sm border border-green-200 rounded-2xl p-8">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="./Logo-Jevan-Jhola.png" 
                      alt="Logo" 
                      className="h-12 w-auto opacity-90"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-4 text-center">Our Core Philosophy</h3>
                  <p className="text-green-600 mb-6 italic text-center">
                    "We're building something that's always in progress - because the world's problems don't come with manuals."
                  </p>
                  <div className="flex items-center justify-center mt-8">
                    <div className="flex -space-x-3 mr-4">
                      {[1, 2, 3].map((item) => (
                        <motion.div 
                          key={item} 
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-white"
                          whileHover={{ scale: 1.2, zIndex: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-green-600">Join 450+ change-makers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Manifesto Highlights */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="./Logo-Jevan-Jhola.png" 
                    alt="Logo" 
                    className="h-16 w-auto mr-3 opacity-90"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-green-900 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-900">
                    The Jeevan Jhola Spirit
                  </h2>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full"></div>
              </motion.div>
              <p className="text-green-700 mt-6">
                Our guiding principles for creating sustainable change through action
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {manifestoHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-white/70 backdrop-blur-sm border border-green-200 rounded-xl p-6 transition-all relative overflow-hidden group"
                >
                  {/* Animated highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-green-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="text-3xl mb-4 relative">
                    {item.icon}
                  </div>
                  <p className="text-green-700 font-medium mb-3 leading-relaxed relative">
                    "{item.quote}"
                  </p>
                  <p className="text-sm text-green-600 relative">
                    — {item.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Manifesto Details Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-4xl mx-auto mb-16"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200/50 to-green-300/50 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-2xl p-8 md:p-10 text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="./Logo-Jevan-Jhola.png" 
                    alt="Logo" 
                    className="h-20 w-auto opacity-90"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center bg-green-100/50 backdrop-blur-sm px-6 py-2 rounded-full border border-green-300/70 mb-6"
                >
                  <FaQuoteLeft className="mr-2 text-green-500" />
                  <span className="text-green-700 font-medium">Our Manifesto</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  The Principles That Define Us
                </h2>
                <p className="text-lg text-green-700 max-w-2xl mx-auto">
                  The foundation of our mission and the values that guide our every action
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "About Us — The Real Us",
                  content: "We're not a startup. We're not trying to look fancy. We're just a bunch of people who couldn't stay silent anymore. Jeevan Jhola is a reminder that the world needs fixing — and waiting is not an option.",
                  icon: <FaHandsHelping className="text-green-600" />,
                },
                {
                  title: "Unconventional Action",
                  content: "We pick up work that everyone else skips. We talk to real people, collect raw, broken, wild ideas, and say: 'Let's f*cking try.' There's no blueprint. No investor pitch. No safety net. Only the need to act.",
                  icon: <FaLightbulb className="text-green-600" />,
                },
                {
                  title: "Progress, Not Perfection",
                  content: "We're building something that's always in progress — because the world's problems don't come with manuals.",
                  icon: <FaRocket className="text-green-600" />,
                },
                {
                  title: "Why We Exist",
                  content: "Because people are tired. Of fake change. Of empty promises. Of all talk and zero walk. We do the boring, dirty, important work that never gets done. Because someone has to. Because no one else is.",
                  icon: <FaQuoteLeft className="text-green-600" />,
                },
                {
                  title: "Our Mission",
                  content: (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Talk to real people. Listen. Not just nod — actually listen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Pick up ideas that matter — not ones that sell</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Get our hands dirty trying to make them real</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Show the truth of the process — the mess, the magic, and the mayhem</span>
                      </li>
                    </ul>
                  ),
                  icon: <FaBullhorn className="text-green-600" />,
                },
                {
                  title: "Our Vision",
                  content: "To build a world where action matters more than status, people don't wait for permission to do good, experiments are celebrated, and 'I tried' is more powerful than 'someday.'",
                  icon: <FaRocket className="text-green-600" />,
                },
                {
                  title: "How We Work",
                  content: "No plans. No playbooks. No perfect conditions. Just this question: 'What needs to be done — and can we do something about it, right now?' We collect ideas from wherever they come — tea stalls, street corners, DMs, broken hearts. And we start. One try at a time.",
                  icon: <FaHandshake className="text-green-600" />,
                },
                {
                  title: "Who's It For?",
                  content: "You. Me. Us. Them. You don't need a degree. You don't need clarity. You just need that itch in your chest that says: 'Something's not right — and I can't sit quietly anymore.'",
                  icon: <FaExclamationTriangle className="text-green-600" />,
                },
                {
                  title: "What We Believe",
                  content: (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Clarity is overrated. Start anyway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Funding might never come. Start anyway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>You'll fail. Start anyway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Someone will laugh. Start anyway</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>You don't know how? Good. Start anyway. Learn on the road</span>
                      </li>
                    </ul>
                  ),
                  icon: <FaSeedling className="text-green-600" />,
                },
                {
                  title: "How To Join",
                  content: "You're already in. You don't need approval. Just message us, show up, start a conversation. We'll figure it out together. No rules. No hierarchy. Just this feeling that: 'We have to do something. Even if we don't know what we're doing. Even if we're scared. Even if no one claps.'",
                  icon: <FaUsers className="text-green-600" />,
                }
              ].map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-2xl overflow-hidden relative group transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start">
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`text-3xl p-3 rounded-lg bg-green-100 mr-5 mt-1`}
                      >
                        {section.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-4">
                          {section.title}
                        </h3>
                        <div className="text-green-700 space-y-4">
                          {typeof section.content === 'string' ? (
                            <p>{section.content}</p>
                          ) : (
                            section.content
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ SECTION INSERTED HERE */}
          {/* Note: The FAQ component has its own 'section' tag with 'id="faq"', 
                   so it's a self-contained block */}
          <FAQ />

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl mb-16 border border-green-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/70 to-green-200/70 backdrop-blur-sm"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 bg-green-200/40 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-10 w-16 h-16 bg-green-300/40 rounded-full"
              animate={{
                y: [0, 20, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="./Logo-Jevan-Jhola.png" 
                    alt="Logo" 
                    className="h-24 w-auto opacity-90"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center bg-green-100/50 backdrop-blur-sm px-6 py-2 rounded-full border border-green-300/70 mb-6"
                >
                  <FaRocket className="mr-2 text-green-500" />
                  <span className="text-green-700 font-medium">Take Action</span>
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
                  Ready to Make a Real Impact?
                </h3>
                <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto">
                  Join our growing community of 450+ change-makers working towards a sustainable future
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a 
                    href="https://instagram.com/jeevanjhola" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 rounded-xl bg-green-700 text-white font-semibold shadow-lg hover:bg-green-800 hover:shadow-green-300/50 transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FaInstagram className="mr-3 text-xl relative z-10" />
                    <span className="relative z-10">Connect on Instagram</span>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:hello.jeevanjhola@gmail.com" 
                    className="flex items-center justify-center px-8 py-4 rounded-xl border border-green-300 text-green-700 font-semibold hover:bg-green-100/50 hover:border-green-400 transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FaLightbulb className="mr-3 text-xl text-green-500 relative z-10" />
                    <span className="relative z-10">Send Us an Email</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center border-t border-green-200 pt-12 pb-8"
          >
            <div className="flex justify-center mb-6">
              <img 
                src="./Logo-Jevan-Jhola.png" 
                alt="Logo" 
                className="h-20 w-auto opacity-80"
              />
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-6">
                {[
                  { icon: <FaInstagram />, url: "#" },
                  { icon: <FaTwitter />, url: "#" },
                  { icon: <FaLinkedin />, url: "#" },
                  { icon: <FaYoutube />, url: "#" }
                ].map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.url} 
                    className="text-xl text-green-600 hover:text-green-800 transition-colors"
                    whileHover={{ y: -5, scale: 1.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {['About', 'Manifesto', 'Products', 'Blog', 'Contact'].map((item, index) => (
                <motion.a 
                  key={index} 
                  href="#" 
                  className="text-green-600 hover:text-green-800 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <p className="text-green-600 text-sm">
              Built with passion by the Jeevan Jhola Team | 
              <a 
                href="https://jeevanjhola.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-700 hover:underline ml-1"
              >
                jeevanjhola.com
              </a>
            </p>
            <p className="text-green-700 text-xs mt-2">
              © {new Date().getFullYear()} Jeevan Jhola. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PreHero;