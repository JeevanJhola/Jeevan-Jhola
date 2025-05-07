import { motion } from "framer-motion"
import { FaQuoteLeft, FaSeedling, FaStore, FaHandsHelping, FaRecycle, FaLeaf } from "react-icons/fa"

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I saw my own donated bag come back to me after 2 weeks. That moment—I understood what Jeevan Jhola means.",
      author: "Lakshmi, Kochi Volunteer",
      role: "Community Leader",
      impact: "340 bags circulated",
      icon: <FaHandsHelping className="text-emerald-400" />,
      pattern: "bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"
    },
    {
      quote: "Our shop saved ₹3,000/month on plastic bags while gaining loyal customers.",
      author: "Ramesh, Grocery Owner",
      role: "Retail Partner",
      impact: "12kg plastic saved",
      icon: <FaStore className="text-emerald-400" />,
      pattern: "bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-emerald-900 to-emerald-950 relative overflow-hidden">
      {/* Floating leaves background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-800"
            initial={{ 
              scale: 0,
              x: Math.random() * 100 - 50 + 'vw',
              y: Math.random() * 100 - 50 + 'vh',
              rotate: Math.random() * 360
            }}
            animate={{ 
              scale: [0, 0.4, 0],
              x: [0, Math.random() * 100 - 50 + 'vw'],
              y: [0, Math.random() * 100 - 50 + 'vh']
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaLeaf className="text-4xl opacity-10" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-300 to-green-100 bg-clip-text text-transparent"
        >
          Ripples of Impact
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 ${testimonial.pattern} opacity-10 rounded-3xl`} />
              <div className="relative h-full p-8 bg-emerald-900/30 rounded-3xl border-2 border-emerald-800/50 hover:border-emerald-700/70 backdrop-blur-sm transition-all">
                <div className="absolute -top-6 left-6">
                  <div className="p-4 bg-emerald-800 rounded-2xl shadow-lg">
                    {testimonial.icon}
                  </div>
                </div>
                
                <FaQuoteLeft className="absolute top-12 right-8 text-emerald-600/30 text-8xl -rotate-12" />
                
                <div className="space-y-6">
                  <p className="text-2xl leading-relaxed text-emerald-100 italic font-medium">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-emerald-800/50 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-emerald-300">{testimonial.author}</h3>
                        <p className="text-emerald-400/80">{testimonial.role}</p>
                      </div>
                      <div className="p-3 bg-emerald-800/50 rounded-xl">
                        <span className="text-sm font-semibold text-emerald-300">
                          {testimonial.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover effect connector */}
              <div className="absolute inset-0 -z-10">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 to-transparent rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collective impact footer */}
        <motion.div 
          className="mt-20 p-8 bg-emerald-900/50 rounded-3xl backdrop-blur-sm border border-emerald-800/50 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-5xl font-bold text-emerald-300 mb-2">1.2M+</div>
              <div className="text-emerald-400">Bags in Circulation</div>
              <FaRecycle className="text-emerald-500 mx-auto mt-3" />
            </div>
            <div className="p-4 border-x border-emerald-800/50">
              <div className="text-5xl font-bold text-emerald-300 mb-2">58K+</div>
              <div className="text-emerald-400">Carbon Offset (kg)</div>
              <FaSeedling className="text-emerald-500 mx-auto mt-3" />
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold text-emerald-300 mb-2">240+</div>
              <div className="text-emerald-400">Community Hubs</div>
              <FaHandsHelping className="text-emerald-500 mx-auto mt-3" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated border pulse */}
      <motion.div 
        className="absolute inset-0 border-[16px] border-emerald-900/20 pointer-events-none"
        animate={{ borderWidth: [16, 8, 16] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  )
}

export default Testimonials