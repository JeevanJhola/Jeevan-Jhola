import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { FaLeaf, FaHandsHelping } from "react-icons/fa"

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-800 to-primary text-white overflow-hidden">
      {/* Nature pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      
      {/* Floating leaves decoration */}
      <motion.div 
        className="absolute top-20 -right-20 opacity-20 rotate-12"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaLeaf className="w-48 h-48" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Eco badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mb-6 inline-flex items-center bg-green-700/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/50"
          >
            <FaLeaf className="mr-2 text-green-300" />
            <span className="font-medium text-green-100">Sustainable Initiative</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
              What You Carry,
            </span>
            <br />
            Shapes Our Future
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-green-100 leading-relaxed">
            Join India's first circular economy network for reusable packaging. 
            Community-driven, technology-enabled, and completely plastic-free.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="flex items-center bg-white/90 text-green-800 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <FaHandsHelping className="mr-2" />
              Join the Movement
            </Link>
            <Link
              to="eco-system"
              smooth={true}
              duration={500}
              className="flex items-center border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Discover Our System
            </Link>
          </div>

          {/* Impact stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex gap-8 text-green-200"
          >
            <div className="pr-8 border-r border-green-400/20">
              <p className="text-2xl font-bold">1.2M+</p>
              <p className="text-sm">Bags Circulated</p>
            </div>
            <div>
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm">Plastic Reduction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero