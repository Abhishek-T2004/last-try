import { motion } from 'framer-motion'
import TimelineComponent from '../components/TimelineComponent'

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Gandhi's Timeline</h1>
          <p className="text-amber-100 text-lg">A journey through the life and legacy of Mahatma Gandhi</p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <TimelineComponent />
      </div>
    </div>
  )
}
