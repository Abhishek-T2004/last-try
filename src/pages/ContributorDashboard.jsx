import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitArticle } from '../lib/api'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const PRINCIPLES = ['Satya', 'Ahimsa', 'Swadeshi', 'Satyagraha', 'Swaraj']

export default function ContributorDashboard() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    principle: '',
    author: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: submitArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      setSubmitted(true)
      setFormData({ title: '', content: '', principle: '', author: '' })
      setTimeout(() => setSubmitted(false), 3000)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.content && formData.principle) {
      mutation.mutate(formData)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Submit Article</h1>
          <p className="text-amber-100 text-lg">Share your insights on Gandhian philosophy and principles</p>
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-8 py-16">
        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 p-4 bg-green-100 border-2 border-green-500 rounded-lg flex items-center gap-3"
          >
            <FaCheckCircle className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-bold text-green-800">Article Submitted!</h3>
              <p className="text-green-700">Thank you for your contribution to our community.</p>
            </div>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg border-2 border-amber-200"
        >
          {/* Title */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <label className="block text-lg font-bold text-amber-900 mb-2">Article Title *</label>
            <input
              type="text"
              placeholder="Enter article title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none text-gray-700 transition-colors"
              required
            />
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-lg font-bold text-amber-900 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none text-gray-700 transition-colors"
            />
          </motion.div>

          {/* Principle */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-lg font-bold text-amber-900 mb-2">Gandhian Principle *</label>
            <select
              value={formData.principle}
              onChange={(e) => setFormData({ ...formData, principle: e.target.value })}
              className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none text-gray-700 transition-colors"
              required
            >
              <option value="">Select a principle</option>
              {PRINCIPLES.map((principle) => (
                <option key={principle} value={principle}>
                  {principle}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-lg font-bold text-amber-900 mb-2">Article Content *</label>
            <textarea
              placeholder="Write your article here..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none text-gray-700 transition-colors h-64 resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  </motion.div>
                  Submitting...
                </span>
              ) : (
                'Submit Article'
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}
