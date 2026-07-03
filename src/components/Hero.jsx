import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-khadi-cream via-khadi-light to-khadi-brown overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-service-amber rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 80, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-khadi-brown rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -80, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-khadi-dark"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-8"
            >
              <span className="px-6 py-3 bg-service-amber/20 border-2 border-service-amber text-khadi-brown rounded-full text-sm font-semibold">
                🌿 Centre of Gandhian Studies & Action
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight text-khadi-dark"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              "Be the Change You Wish to See in the World"
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="w-24 h-1 bg-service-amber mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-khadi-dark mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover the life, philosophy and timeless teachings of Mahatma Gandhi through articles, events, resources and digital archives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.a
                href="/articles"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(85, 107, 47, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-khadi-brown text-white rounded-full font-bold text-lg hover:bg-khadi-dark transition-all shadow-lg"
              >
                Explore Articles
                <FaArrowRight className="text-lg" />
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(85, 107, 47, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-khadi-brown text-khadi-brown rounded-full font-bold text-lg hover:bg-khadi-cream transition-all"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Decorative Background Circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-service-amber to-khadi-brown rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Image Container */}
              <div className="relative z-10 bg-white p-3 rounded-2xl shadow-2xl overflow-hidden">
                <motion.img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mahatma_Gandhi_1927.jpg/440px-Mahatma_Gandhi_1927.jpg" 
                  alt="Mahatma Gandhi"
                  className="w-full h-auto rounded-xl object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="text-khadi-brown text-sm font-semibold">Scroll to explore</div>
        <svg className="w-6 h-6 text-khadi-brown mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  )
}
