import { motion } from 'framer-motion'

export default function TimelineComponent() {
  const events = [
    { year: 1869, title: 'Birth', description: 'Born as Mohandas Karamchand Gandhi in Porbandar' },
    { year: 1888, title: 'London Education', description: 'Studies law in England, begins forming his ideals' },
    { year: 1893, title: 'South Africa', description: 'Discrimination incident sparks his activism' },
    { year: 1915, title: 'Return to India', description: 'Returns to lead Indian independence movement' },
    { year: 1920, title: 'Non-Cooperation', description: 'Launches Non-Cooperation Movement against British' },
    { year: 1930, title: 'Salt March', description: 'Historic Salt March challenging the Salt Act' },
    { year: 1947, title: 'Independence', description: 'India gains independence from British rule' },
    { year: 1948, title: 'Assassination', description: 'Passes away on January 30, leaving eternal legacy' },
  ]

  return (
    <div className="space-y-8">
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 md:gap-8"
        >
          {/* Year */}
          <div className="flex-shrink-0 w-32">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-right font-bold text-2xl text-amber-700 bg-amber-100 rounded-lg p-4"
            >
              {event.year}
            </motion.div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center">
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full border-4 border-white shadow-lg"
              whileHover={{ scale: 1.3 }}
            />
            {idx < events.length - 1 && (
              <div className="w-1 h-24 bg-gradient-to-b from-amber-400 to-transparent" />
            )}
          </div>

          {/* Content */}
          <motion.div
            whileHover={{ x: 10 }}
            className="pb-8 flex-1 bg-white p-6 rounded-lg border-2 border-amber-200 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-2">{event.title}</h3>
            <p className="text-gray-700 text-lg">{event.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
