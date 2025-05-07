import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const links = [
    { name: "How It Works", to: "eco-system" },
    { name: "Join Us", href: "cta" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Jeevan Jhola</h3>
            <p className="text-gray-400 mb-4">
              "What you carry, carries you." India's first community-based reusable bag network.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
            <address className="text-gray-400 not-italic">
              Kottayam, Kerala 686564<br/>
              Phone: +91 97097 99899<br/>
              Email: hello.jeevanjhola@gmail.com
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Jeevan Jhola. All rights reserved.</p>
          <p className="mt-2">Made with ♥ for a plastic-free India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer