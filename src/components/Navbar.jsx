import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'About', href: '/about' },
    { name: 'Contribute', href: '/contribute' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-khadi-brown to-khadi-dark text-white shadow-xl"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          className="text-3xl font-bold font-serif text-khadi-cream"
          whileHover={{ scale: 1.05 }}
        >
          CGSA
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <a href={link.href} className="font-semibold transition-colors hover:text-khadi-cream">
                {link.name}
              </a>
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-1 bg-service-amber group-hover:w-full transition-all duration-300"
              />
            </motion.li>
          ))}
          
          {/* Login Button */}
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/login" 
              className="bg-service-amber text-khadi-dark px-6 py-2 rounded-full font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl"
            >
              Sign In
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-khadi-cream hover:text-white transition-colors"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-khadi-dark"
      >
        <ul className="flex flex-col gap-4 p-4">
          {navLinks.map((link, idx) => (
            <motion.li 
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              <a href={link.href} className="font-semibold hover:text-khadi-cream transition-colors block py-2">
                {link.name}
              </a>
            </motion.li>
          ))}
          
          {/* Mobile Login Button */}
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <a 
              href="/login" 
              className="bg-service-amber text-khadi-dark px-6 py-2 rounded-full font-bold hover:bg-white transition-all inline-block w-full text-center"
            >
              Sign In
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  )
}
