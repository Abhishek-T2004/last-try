import { useQuery } from '@tanstack/react-query'
import { fetchQuoteOfDay } from '../lib/api'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function QuoteOfDay() {
  const { data: quote, isLoading } = useQuery({
    queryKey: ['quoteOfDay'],
    queryFn: fetchQuoteOfDay,
  })

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <div className="w-10 h-10 border-4 border-khadi-light border-t-khadi-brown rounded-full" />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-khadi-brown font-medium"
        >
          Loading today's wisdom...
        </motion.p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow"
    >
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-khadi-brown via-khadi-dark to-khadi-brown h-2" />
      
      {/* Content */}
      <div className="p-10 md:p-12 bg-gradient-to-br from-khadi-cream to-khadi-light">
        {/* Decorative Icon Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <FaQuoteLeft className="text-khadi-brown text-4xl opacity-30" />
        </motion.div>

        {/* Quote Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-serif italic text-khadi-dark text-center mb-8 leading-relaxed font-bold"
        >
          "{quote?.text || 'In a gentle way, you can shake the world.'}"
        </motion.p>

        {/* Decorative Icon Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <FaQuoteRight className="text-khadi-brown text-4xl opacity-30" />
        </motion.div>

        {/* Author & Principle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t-2 border-khadi-brown/20"
        >
          <p className="text-lg font-semibold text-khadi-brown">— Mahatma Gandhi</p>
          {quote?.principle && (
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-khadi-brown text-white rounded-full text-sm font-bold hover:bg-khadi-dark transition-colors cursor-pointer"
            >
              {quote.principle}
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
