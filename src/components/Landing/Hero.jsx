import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-green-900 via-green-800 to-primary text-white overflow-hidden"
    >
      {/* Nature pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] scale-110" />
      
      {/* Floating leaves decorations */}
      <motion.div 
        className="absolute top-20 -right-20 opacity-20 rotate-12"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaLeaf className="w-48 h-48" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 -left-16 opacity-15 -rotate-12"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
      >
        <FaLeaf className="w-40 h-40" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo with animation */}
        <motion.div
          className="flex justify-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-xl">
            <div className="bg-white p-3 rounded-xl flex items-center justify-center">
              <img 
                src="src/assets/Logo-Jevan-Jhola.png" 
                alt="Jevan Jhola" 
                className="h-16 md:h-20 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Eco badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 backdrop-blur-sm px-4 py-2 rounded-full border border-green-300/50 shadow-lg">
              <FaLeaf className="mr-2 text-green-100 animate-pulse" />
              <span className="font-medium text-white">Sustainable Initiative</span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-center">
            <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
              What You Carry,
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Shapes Our Future
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-green-100 leading-relaxed text-center">
            Join India's first circular economy network for reusable packaging. 
            Community-driven, technology-enabled, and completely plastic-free.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaHandsHelping className="mr-2 text-lg" />
              Join the Movement
            </Link>
            <Link
              to="eco-system"
              smooth={true}
              duration={500}
              className="flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discover Our System
            </Link>
          </div>

          {/* Impact stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-8 text-green-200 justify-center"
          >
            <div className="pr-8 border-r border-green-400/20">
              <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">1.2M+</p>
              <p className="text-sm">Bags Circulated</p>
            </div>
            <div className="pr-8 border-r border-green-400/20">
              <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">85%</p>
              <p className="text-sm">Plastic Reduction</p>
            </div>
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">120+</p>
              <p className="text-sm">Communities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          className="fill-current text-green-900/80"
          preserveAspectRatio="none"
        >
        </svg>
      </div>
    </section>
  )
}

export default Hero