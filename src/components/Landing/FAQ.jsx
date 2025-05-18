import { motion } from "framer-motion"
import { useState } from "react"
import { FaLeaf, FaPlus, FaMinus, FaComment, FaTimes, FaPaperPlane } from "react-icons/fa"
import { Disclosure } from '@headlessui/react'

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
    <section id="faq" className="relative py-16 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-200"
            initial={{ y: -10, x: Math.random() * 100 }}
            animate={{ y: [0, -20, 0], rotate: [0, 180] }}
            transition={{ duration: 4 + i*2, repeat: Infinity }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            <FaLeaf className="text-4xl" />
          </motion.div>
        ))}
      </div>

      {/* Animated Chat Bot */}
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
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-emerald-100"
            >
              <div className="p-4 bg-emerald-600 text-white rounded-t-2xl flex items-center">
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
                <div className="mb-4 text-sm text-emerald-600">
                  Hi! I'm here to help. Choose a question or type your own:
                </div>
                
                {presetQuestions.map((q, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="mb-2 p-2 text-sm bg-emerald-50 rounded-lg cursor-pointer"
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
                    className="flex-1 p-2 border border-emerald-200 rounded-lg text-sm"
                  />
                  <button className="p-2 bg-emerald-600 text-white rounded-lg">
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-all"
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
              className="mb-6 inline-flex items-center bg-emerald-100 px-6 py-2 rounded-full"
            >
              <FaLeaf className="mr-2 text-emerald-600" />
              <span className="text-emerald-700 font-medium">Community Hub</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              Connect & Collaborate
            </h2>
            <p className="text-xl text-emerald-600 max-w-2xl mx-auto">
              Your gateway to India's reusable revolution
            </p>
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
                      <div className="border border-emerald-100 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
                        <Disclosure.Button className="flex w-full items-center justify-between p-6 text-left">
                          <span className="text-lg font-medium text-emerald-800">
                            {item.question}
                          </span>
                          {open ? (
                            <FaMinus className="text-emerald-600" />
                          ) : (
                            <FaPlus className="text-emerald-600" />
                          )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-6 pb-6 pt-2 text-emerald-600">
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
              className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Direct Message
              </h3>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center p-6 bg-emerald-50 rounded-xl"
                >
                  <FaLeaf className="text-4xl text-emerald-600 mx-auto mb-4" />
                  <p className="text-emerald-700 font-semibold">
                    Message received! We'll respond within 24 hours
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-emerald-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-700 mb-2">Message</label>
                    <textarea
                      rows="4"
                      required
                      className="w-full p-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-emerald-700 transition-colors"
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
            <p className="text-emerald-600 mb-4">
              Prefer email? Write to us at{' '}
              <a href="mailto:hello.jeevanjhola@gmail.com" className="font-semibold hover:underline">
                hello.jeevanjhola@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ