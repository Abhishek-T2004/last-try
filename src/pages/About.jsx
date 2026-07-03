import { motion } from 'framer-motion'
import { FaGlobe, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa'

const stats = [
  { icon: FaUsers, label: 'Community Members', value: '10K+' },
  { icon: FaAward, label: 'Articles', value: '500+' },
  { icon: FaLightbulb, label: 'Topics Covered', value: '50+' },
  { icon: FaGlobe, label: 'Countries Reached', value: '25+' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">About CGSA</h1>
          <p className="text-amber-100 text-lg">Celebrating and preserving the legacy of Mahatma Gandhi</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-amber-900 mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg border-2 border-amber-200"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Preserve History</h3>
              <p className="text-gray-700 leading-relaxed">
                We are dedicated to preserving and sharing the profound wisdom and teachings of Mahatma Gandhi, ensuring his legacy reaches future generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-lg border-2 border-amber-200"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Inspire Action</h3>
              <p className="text-gray-700 leading-relaxed">
                Through thoughtful discussions and articles, we inspire individuals to apply Gandhian principles in contemporary society for positive change.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow"
                >
                  <Icon className="text-5xl text-amber-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-amber-900 mb-2">{stat.value}</p>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">Our Core Values</h2>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Truth (Satya)</h3>
                <p className="text-amber-100">We seek and share authentic truths about Gandhi's life and principles.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Non-violence (Ahimsa)</h3>
                <p className="text-amber-100">We promote peaceful dialogue and compassionate understanding.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Self-reliance (Swaraj)</h3>
                <p className="text-amber-100">We empower individuals to take independent action for change.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Community</h3>
                <p className="text-amber-100">We foster a diverse, inclusive community dedicated to positive impact.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
