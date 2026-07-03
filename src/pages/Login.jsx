import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaLeaf } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const inputVariants = {
  focus: { scale: 1.02 },
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      // Simulate login
      setTimeout(() => {
        setIsLoading(false)
        alert('Login successful! (Demo mode)')
        setEmail('')
        setPassword('')
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-khadi-cream via-white to-khadi-light flex items-center justify-center px-4 py-12">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-khadi-brown/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-service-amber/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="space-y-8">
              {/* Logo */}
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-khadi-brown to-khadi-dark rounded-2xl flex items-center justify-center">
                  <FaLeaf className="text-white text-2xl" />
                </div>
                <div>
                  <h1 className="text-3xl font-serif font-bold text-khadi-dark">CGSA</h1>
                  <p className="text-khadi-brown text-sm font-medium">Centre of Gandhian Studies</p>
                </div>
              </motion.div>

              {/* Info Cards */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-khadi-brown"
                >
                  <h3 className="text-khadi-brown font-bold text-lg mb-2">Explore Wisdom</h3>
                  <p className="text-gray-600">Discover the timeless teachings and philosophy of Mahatma Gandhi.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-service-amber"
                >
                  <h3 className="text-khadi-brown font-bold text-lg mb-2">Share Knowledge</h3>
                  <p className="text-gray-600">Contribute your insights and help build our community of learners.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-khadi-light"
                >
                  <h3 className="text-khadi-brown font-bold text-lg mb-2">Connect & Learn</h3>
                  <p className="text-gray-600">Join a global community dedicated to Gandhian principles.</p>
                </motion.div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="p-6 bg-gradient-to-r from-khadi-cream to-khadi-light rounded-2xl border-2 border-khadi-brown/30"
              >
                <p className="text-khadi-dark font-serif italic text-lg font-bold">
                  "In a gentle way, you can shake the world."
                </p>
                <p className="text-khadi-brown text-sm font-medium mt-3">- Mahatma Gandhi</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm bg-white/95">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-khadi-dark mb-3">
                  Welcome Back
                </h2>
                <p className="text-gray-600 text-lg">
                  Sign in to your account to continue learning
                </p>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-khadi-dark font-semibold mb-3 text-sm">
                    Email Address
                  </label>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                    className="relative"
                  >
                    <FaEnvelope className="absolute left-4 top-4 text-khadi-brown text-lg" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors.email) setErrors({ ...errors, email: '' })
                      }}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-khadi-light rounded-xl focus:border-khadi-brown focus:outline-none transition-all duration-300 bg-khadi-cream/50 hover:bg-khadi-cream"
                    />
                  </motion.div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 font-medium"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-khadi-dark font-semibold mb-3 text-sm">
                    Password
                  </label>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                    className="relative"
                  >
                    <FaLock className="absolute left-4 top-4 text-khadi-brown text-lg" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        if (errors.password) setErrors({ ...errors, password: '' })
                      }}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3 border-2 border-khadi-light rounded-xl focus:border-khadi-brown focus:outline-none transition-all duration-300 bg-khadi-cream/50 hover:bg-khadi-cream"
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-4 top-4 text-khadi-brown"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </motion.button>
                  </motion.div>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 font-medium"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 accent-khadi-brown rounded"
                    />
                    <span className="text-gray-600 text-sm font-medium">Remember me</span>
                  </label>
                  <motion.a
                    href="#"
                    whileHover={{ color: '#556B2F' }}
                    className="text-khadi-brown text-sm font-semibold hover:underline"
                  >
                    Forgot password?
                  </motion.a>
                </motion.div>

                {/* Sign In Button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-khadi-brown to-khadi-dark text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Signing in...
                    </motion.span>
                  ) : (
                    'Sign In'
                  )}
                </motion.button>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="relative py-6"
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-khadi-light" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-white text-gray-500 font-medium">Or continue with</span>
                  </div>
                </motion.div>

                {/* Social Login */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 border-2 border-khadi-light rounded-xl hover:border-khadi-brown hover:bg-khadi-cream/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGoogle className="text-khadi-brown" />
                    <span className="hidden sm:inline text-khadi-dark font-semibold text-sm">Google</span>
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 border-2 border-khadi-light rounded-xl hover:border-khadi-brown hover:bg-khadi-cream/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="text-khadi-brown font-bold">f</span>
                    <span className="hidden sm:inline text-khadi-dark font-semibold text-sm">Facebook</span>
                  </motion.button>
                </motion.div>
              </form>

              {/* Sign Up Link */}
              <motion.div
                variants={itemVariants}
                className="text-center mt-8 pt-8 border-t-2 border-khadi-light"
              >
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <motion.a
                    href="/register"
                    whileHover={{ color: '#556B2F' }}
                    className="text-khadi-brown font-bold hover:underline"
                  >
                    Sign up here
                  </motion.a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
