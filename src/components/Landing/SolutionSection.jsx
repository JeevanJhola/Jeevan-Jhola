import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaUsers, FaSeedling, FaHandHoldingHeart } from "react-icons/fa";

const SolutionSection = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Zero Manufacturing",
      description: "Sourced through community donations and textile upcycling",
      impact: "Reduces CO₂ by 2.3kg per bag",
      color: "from-green-100 to-emerald-50",
      pattern: "bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')]"
    },
    {
      icon: <FaRecycle className="text-4xl" />,
      title: "Circular Ecosystem",
      description: "Smart tracking ensures 8+ reuses per bag",
      impact: "85% lower footprint vs single-use",
      color: "from-teal-100 to-cyan-50",
      pattern: "bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Community Power",
      description: "Local networks drive collection & distribution",
      impact: "Empowers 200+ SHGs monthly",
      color: "from-amber-100 to-orange-50",
      pattern: "bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"
    }
  ];

  const leaves = [
    { size: 'w-12 h-12', left: '10%', top: '20%', duration: 5 },
    { size: 'w-8 h-8', left: '80%', top: '40%', duration: 7 },
    { size: 'w-16 h-16', left: '50%', top: '60%', duration: 6 },
    { size: 'w-10 h-10', left: '30%', top: '80%', duration: 4 },
  ];

  return (
    <section id="solution" className="relative py-24 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      {/* Floating leaves decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {leaves.map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: leaf.left, top: leaf.top }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: leaf.duration, repeat: Infinity, repeatType: "reverse" }}
          >
            <FaLeaf className={`${leaf.size} text-green-200 opacity-10`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-green-100 px-6 py-2 rounded-full mb-6">
            <FaHandHoldingHeart className="mr-2 text-green-600" />
            <span className="text-green-700 font-medium">Sustainable Innovation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            Re-Designing Resource Cycles
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our three-pillar approach combines community wisdom with smart technology to create India's first circular bag economy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Animated background layer */}
              <div className={`absolute inset-0 ${feature.pattern} opacity-10 group-hover:opacity-20 bg-cover transition-opacity`} />
              
              <div className={`bg-gradient-to-br ${feature.color} p-6 md:p-8 h-full`}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ y: [0, -5, 0], rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
                    className="mb-6 p-4 bg-white rounded-full shadow-sm"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>

                  <div className="mt-auto w-full">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-green-700">
                          {feature.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect elements */}
                <div className="absolute inset-0 border-2 border-green-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="absolute -bottom-4 -right-4 text-green-50 opacity-0 group-hover:opacity-20 transition-opacity">
                  <FaRecycle className="w-24 h-24" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-green-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {['Donate', 'Circulate', 'Reuse'].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{step}</h4>
                  <p className="text-sm text-gray-600">Closed-loop phase {i + 1}</p>
                </div>
                {i < 2 && <div className="hidden md:block mx-4 text-gray-300">➔</div>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;