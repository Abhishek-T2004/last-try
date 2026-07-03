import { motion } from 'framer-motion'
import { FaBookmark } from 'react-icons/fa'

export default function ArticleCard({ article }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="h-full p-6 border-2 border-amber-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-amber-50 group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-3">
            {article?.principle || 'Article'}
          </span>
        </div>
        <FaBookmark className="text-2xl text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-2xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
        {article?.title || 'Article Title'}
      </h3>
      <p className="text-gray-700 mb-4 line-clamp-3">{article?.description || 'No description available'}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-amber-100">
        <span className="text-sm text-gray-600">{article?.author || 'Anonymous'}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-amber-600 font-bold hover:text-amber-700"
        >
          Read More →
        </motion.button>
      </div>
    </motion.div>
  )
}
