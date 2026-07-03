import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const articles = [
  {
    id: 1,
    title: 'The Power of Truth',
    desc: 'Gandhi believed Truth (Satya) is the highest virtue. Living truthfully brings courage, peace and justice.',
    tag: 'SATYA',
    image: 'https://via.placeholder.com/400x240?text=Satya',
    color: 'from-amber-400 to-yellow-400',
  },
  {
    id: 2,
    title: 'Understanding Ahimsa',
    desc: 'Ahimsa means non-violence in thought, speech and action toward all living beings.',
    tag: 'AHIMSA',
    image: 'https://via.placeholder.com/400x240?text=Ahimsa',
    color: 'from-green-400 to-emerald-400',
  },
  {
    id: 3,
    title: 'The Meaning of Swaraj',
    desc: 'Swaraj is self-rule through self-discipline, responsibility and ethical leadership.',
    tag: 'SWARAJ',
    image: 'https://via.placeholder.com/400x240?text=Swaraj',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 4,
    title: 'Swadeshi Movement',
    desc: 'Support local artisans and products to strengthen communities and economic independence.',
    tag: 'SWADESHI',
    image: 'https://via.placeholder.com/400x240?text=Swadeshi',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 5,
    title: 'The Symbol of Self-Reliance',
    desc: "Gandhi's spinning wheel became a symbol of dignity, labor and economic freedom.",
    tag: 'CHARKHA',
    image: 'https://via.placeholder.com/400x240?text=Charkha',
    color: 'from-orange-400 to-amber-400',
  },
  {
    id: 6,
    title: 'The Dandi Salt March',
    desc: 'The historic march demonstrated peaceful resistance against unjust laws.',
    tag: 'SATYAGRAHA',
    image: 'https://via.placeholder.com/400x240?text=Dandi+March',
    color: 'from-red-400 to-rose-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function FeaturedArticles() {
  return (
    <section className="py-24 px-4 md:px-8 bg-khadi-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="inline-block bg-khadi-brown text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            📖 Featured Articles
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-khadi-dark mb-6">
            Articles on Gandhian Thought
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore timeless wisdom, philosophy and values that continue to inspire generations.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Tag */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block bg-khadi-light text-khadi-brown px-4 py-1 rounded-full text-xs font-bold tracking-wide mb-4"
                >
                  {article.tag}
                </motion.span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-khadi-dark mb-3 font-serif group-hover:text-khadi-brown transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
                  {article.desc}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-khadi-brown font-bold hover:text-khadi-dark transition-colors group/link"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Bottom Border Animation */}
              <motion.div
                className="h-1 bg-gradient-to-r from-khadi-brown to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/articles"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-khadi-brown text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-khadi-dark transition-all shadow-lg hover:shadow-xl"
          >
            View All Articles
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
