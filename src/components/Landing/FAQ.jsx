import { motion } from "framer-motion"
import { FaLeaf, FaPlus, FaMinus } from "react-icons/fa"
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

  return (
    <section id="faq" className="relative py-16 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Floating leaves background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="mb-6 inline-flex items-center bg-emerald-100 px-6 py-2 rounded-full"
            >
              <FaLeaf className="mr-2 text-emerald-600" />
              <span className="text-emerald-700 font-medium">Community Answers</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-emerald-600 max-w-2xl mx-auto">
              Everything you need to know about joining India's reusable revolution
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-emerald-100 rounded-xl bg-white/50 backdrop-blur-sm">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-emerald-600 mb-4">
              Still have questions? Reach out to our community team
            </p>
            <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
              <FaLeaf className="mr-2" />
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ