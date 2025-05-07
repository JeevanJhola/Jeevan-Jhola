import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes, FaLeaf } from "react-icons/fa"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const links = [
    { name: "The Problem", to: "problem" },
    { name: "Our Solution", to: "solution" },
    { name: "How It Works", to: "eco-system" },
    { name: "Testimonials", to: "testimonials" },
    { name: "FAQ", to: "faq" },
    { name: "Get Involved", to: "cta" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-emerald-100" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaLeaf className="text-emerald-800 text-2xl" />
          <span className="text-2xl font-bold text-emerald-800 font-montserrat tracking-tight">
            Jeevan Jhola
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className={`relative px-4 py-2 cursor-pointer text-emerald-900 hover:text-emerald-700 transition-all
                         group font-medium ${isScrolled ? "text-emerald-800" : "text-emerald-900"}`}
              activeClass="!text-emerald-600 font-semibold"
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] ${
                isScrolled ? "bg-emerald-600" : "bg-emerald-500"
              } transition-all group-hover:w-full`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg hover:bg-emerald-50 transition-colors"
            aria-label="Navigation menu"
          >
            {isOpen ? (
              <FaTimes className="text-emerald-600 text-2xl" />
            ) : (
              <FaBars className="text-emerald-600 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-lg shadow-xl border-b border-emerald-50"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="block px-4 py-3 rounded-lg cursor-pointer text-emerald-800 
                           hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
                activeClass="!bg-emerald-50 !text-emerald-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar