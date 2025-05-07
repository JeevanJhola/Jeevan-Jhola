import { motion } from "framer-motion"
import { FaWater, FaTrash, FaSkullCrossbones, FaLeaf, FaSeedling } from "react-icons/fa"

const ProblemSection = () => {
  const stats = [
    { icon: <FaTrash className="text-teal-600" />, value: "100B+", label: "Plastic bags used annually" },
    { icon: <FaWater className="text-teal-600" />, value: "80%", label: "Ocean plastic from land" },
    { icon: <FaLeaf className="text-teal-600" />, value: "1M+", label: "Annual animal deaths" }
  ]

  return (
    <section id="problem" className="relative py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Floating plastic bag illustration */}
      <div className="absolute top-20 right-0 opacity-10 -rotate-12">
        <svg className="w-64 h-64 text-green-200" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 2L8 8H5C3.9 8 3 8.9 3 10v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-3l-2-6h-4m0 2h4l1.5 4H18v12H6V10h2.5L10 4z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="mb-6 inline-flex items-center bg-amber-100 px-6 py-2 rounded-full"
            >
              <FaSeedling className="mr-2 text-amber-700" />
              <span className="text-amber-800 font-medium">Ecosystem Alert</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-green-800 bg-clip-text text-transparent">
              The Plastic Paradox
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              While laws exist, reality tells a different story. India's battle with plastic waste continues 
              to escalate, creating an environmental crisis that demands immediate action.
            </p>
          </div>

          {/* Interactive stats grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Impact timeline */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-teal-50/60 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-teal-600"
          >
            <div className="flex items-start mb-4">
              <div className="bg-teal-600 text-white p-3 rounded-lg mr-4">
                <FaSkullCrossbones className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">The Hidden Timeline</h3>
                <p className="text-gray-600">
                  That "disposable" plastic bag spends 500+ years choking ecosystems, 
                  breaking into microplastics that infiltrate our food chain and water supply.
                </p>
              </div>
            </div>
            
            <div className="flex items-center text-teal-600">
              <div className="flex-1 border-t-2 border-dashed border-teal-200"></div>
              <span className="mx-4 font-medium">Meanwhile...</span>
              <div className="flex-1 border-t-2 border-dashed border-teal-200"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {['Wildlife suffers', 'Crops absorb toxins', 'Water contaminated', 'Human health risks'].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-teal-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection