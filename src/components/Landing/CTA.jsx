import { motion } from "framer-motion"
import { FaHandsHelping, FaStoreAlt, FaSeedling, FaCoins, FaLeaf } from "react-icons/fa"

const CTA = () => {
  return (
    <section id="cta" className="py-28 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae')] bg-cover bg-center relative overflow-hidden">
      {/* Animated particle overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-100"
            initial={{ 
              scale: 0,
              x: Math.random() * 100 - 50 + 'vw',
              y: Math.random() * 100 - 50 + 'vh'
            }}
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaLeaf className="text-xl opacity-50" />
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-emerald-800/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-10">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-emerald-100/10 p-4 rounded-full backdrop-blur-sm"
            >
              <FaSeedling className="text-5xl text-emerald-300" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 to-green-100 bg-clip-text text-transparent">
              Grow With Us
            </span><br/>
            <span className="text-xl font-normal text-emerald-100">India's Circular Packaging Movement</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-300/40 transition-all"
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-2xl bg-emerald-500/20">
                    <FaHandsHelping className="text-3xl text-emerald-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-50 mb-4">Community Champion</h3>
                <p className="text-emerald-100 mb-6">Lead local initiatives and earn green credits</p>
                <button className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-emerald-600/20">
                  Join Movement
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="mt-4 text-sm text-emerald-200 flex items-center justify-center gap-2">
                  <FaCoins className="text-emerald-300" />
                  2,314 Active Volunteers
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-300/40 transition-all"
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-2xl bg-emerald-500/20">
                    <FaStoreAlt className="text-3xl text-emerald-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-50 mb-4">Eco-Partner Hub</h3>
                <p className="text-emerald-100 mb-6">Sustainable business integration program</p>
                <button className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-emerald-600/20">
                  Partner With Us
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="mt-4 text-sm text-emerald-200 flex items-center justify-center gap-2">
                  <FaLeaf className="text-emerald-300" />
                  896 Stores Transformed
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-emerald-200/20 hover:border-emerald-300/40 transition-all"
            >
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-2xl bg-emerald-500/20">
                    <FaCoins className="text-3xl text-emerald-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-50 mb-4">Impact Investor</h3>
                <p className="text-emerald-100 mb-6">Fund circular economy innovations</p>
                <button className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-emerald-600/20">
                  Create Legacy
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="mt-4 text-sm text-emerald-200 flex items-center justify-center gap-2">
                  <FaSeedling className="text-emerald-300" />
                  15K+ Bags Funded
                </div>
              </div>
            </motion.div>
          </div>

          {/* Collective impact footer */}
          <motion.div 
            className="mt-16 p-6 bg-emerald-900/30 rounded-2xl backdrop-blur-sm border border-emerald-200/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex flex-wrap justify-center gap-8 text-emerald-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">1.2M+</div>
                <div className="text-sm">Plastic Bags Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">58K+</div>
                <div className="text-sm">Carbon Offset (kg)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">240+</div>
                <div className="text-sm">Community Hubs</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 border-[16px] border-emerald-900/20 pointer-events-none"
        animate={{ borderWidth: [16, 8, 16] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  )
}

export default CTA