import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import QuoteOfDay from '../components/QuoteOfDay'
import FeaturedArticles from '../components/FeaturedArticles'
import { FaLeaf, FaHeart, FaBook, FaUsers } from 'react-icons/fa'

const features = [
  { icon: FaLeaf, title: 'Satya', desc: 'Truth is God', emoji: '🌿' },
  { icon: FaHeart, title: 'Ahimsa', desc: 'Non-violence towards all', emoji: '🕊️' },
  { icon: FaBook, title: 'Swaraj', desc: 'Self-rule and responsibility', emoji: '🇮🇳' },
  { icon: FaUsers, title: 'Swadeshi', desc: 'Support local products', emoji: '🧵' },
]

const stats = [
  { number: '150+', label: 'Articles' },
  { number: '50+', label: 'Events' },
  { number: '500+', label: 'Students' },
  { number: '20+', label: 'Research Papers' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Featured Articles Section */}
      <FeaturedArticles />

      {/* Quote Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-khadi-cream to-khadi-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-khadi-dark font-serif">Quote of the Day</h2>
            <QuoteOfDay />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-khadi-dark"
          >
            Gandhian Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-gradient-to-br from-khadi-cream to-khadi-light border-2 border-khadi-brown/30 hover:border-khadi-brown hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  className="text-6xl mb-5 inline-block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.emoji}
                </motion.div>
                <h3 className="text-2xl font-bold text-khadi-brown mb-3 font-serif">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-khadi-brown via-khadi-dark to-khadi-brown text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                <motion.h3
                  className="text-5xl md:text-6xl font-bold mb-3 font-serif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-white/90 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-white via-khadi-cream to-khadi-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-serif font-bold mb-8 text-khadi-dark leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              "My life is my message."
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-12 opacity-90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join our community and explore the timeless wisdom of Mahatma Gandhi. Discover how his principles continue to shape a better world.
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="/articles"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-khadi-brown text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-khadi-dark transition-all shadow-lg hover:shadow-xl"
              >
                Explore Articles
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-khadi-brown text-khadi-brown px-8 py-4 rounded-full font-bold text-lg hover:bg-khadi-brown hover:text-white transition-all"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
