import { useState } from 'react'
import { useArticles } from '../hooks/useArticles'
import ArticleCard from '../components/ArticleCard'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'

const GANDHIAN_VALUES = ['Satya', 'Ahimsa', 'Swadeshi', 'Satyagraha', 'Swaraj']

export default function Articles() {
  const [selectedValue, setSelectedValue] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const { data: articles, isLoading } = useArticles({ principle: selectedValue })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Articles on Gandhian Thought</h1>
          <p className="text-amber-100 text-lg">Explore wisdom, principles, and insights from Gandhi's legacy</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-4 text-amber-600 text-xl" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-600 focus:outline-none text-gray-700"
            />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-3 mb-12 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedValue(null)}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              !selectedValue
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                : 'bg-white text-amber-600 border-2 border-amber-200 hover:border-amber-600'
            }`}
          >
            All Articles
          </motion.button>
          {GANDHIAN_VALUES.map((value, idx) => (
            <motion.button
              key={value}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedValue(value)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedValue === value
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                  : 'bg-white text-amber-600 border-2 border-amber-200 hover:border-amber-600'
              }`}
            >
              {value}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-12 h-12 border-4 border-amber-300 border-t-amber-600 rounded-full" />
            </motion.div>
            <p className="text-gray-600 mt-4 text-lg">Loading articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles?.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
