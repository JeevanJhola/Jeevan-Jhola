import { FaStore, FaShoppingBag, FaReply, FaLeaf, FaRecycle, FaSeedling } from "react-icons/fa"
import { motion } from "framer-motion"

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSeedling className="text-2xl text-emerald-600" />,
      title: "Adopt a Bag",
      description: "Borrow a Jeevan Jhola from our partner eco-stations",
      impact: "Saves 3 single-use plastic bags",
      bg: "bg-[#e8f5e9]"
    },
    {
      icon: <FaRecycle className="text-2xl text-emerald-600" />,
      title: "Reuse Responsibly",
      description: "Use it endlessly - organic cotton, plant-dyed fabric",
      impact: "Reduces 200g CO2 per use",
      bg: "bg-[#f1f8e9]"
    },
    {
      icon: <FaLeaf className="text-2xl text-emerald-600" />,
      title: "Return & Renew",
      description: "Compostable drop-off or exchange for fresh bag",
      impact: "Supports circular economy",
      bg: "bg-[#e8f5e9]"
    }
  ]

  return (
    <section id="eco-system" className="py-16 bg-[#fafdf2] relative overflow-hidden">
      {/* Animated floating leaves */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-100 opacity-50"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">
          Our Circular Ecosystem
          <FaLeaf className="inline-block ml-3 text-emerald-600" />
        </h2>

        {/* Living timeline with growing plant */}
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 transform -translate-x-1/2" />
          
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-4">
            <motion.div 
              initial={{ scaleY: 0 }} 
              whileInView={{ scaleY: 1 }}
              className="origin-bottom w-4 h-24 bg-gradient-to-t from-emerald-400 to-emerald-200"
            />
            <FaSeedling className="text-4xl text-emerald-600 -mt-8" />
          </div>

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className={`md:w-1/2 p-8 ${step.bg} rounded-2xl shadow-lg hover:shadow-emerald-100 transition-shadow`}>
                  <div className="flex items-start mb-4">
                    <div className="mr-4 p-3 bg-white rounded-full shadow-sm border-2 border-emerald-100">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-800">{step.title}</h3>
                      <p className="text-emerald-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="p-3 bg-emerald-50 rounded-lg flex items-center gap-2">
                      <FaLeaf className="text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-700">
                        {step.impact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline dots */}
                <div className="hidden md:block md:w-1/2 relative">
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'}`}>
                    <div className="w-8 h-8 bg-emerald-400 rounded-full border-4 border-white shadow-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default HowItWorks