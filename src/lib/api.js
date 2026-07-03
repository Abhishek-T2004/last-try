import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const fetchArticles = async (filters = {}) => {
  const { data } = await axios.get(`${API_BASE}/articles`, { params: filters })
  return data
}

export const fetchQuoteOfDay = async () => {
  const { data } = await axios.get(`${API_BASE}/quote-of-day`)
  return data
}

export const submitArticle = async (article) => {
  const { data } = await axios.post(`${API_BASE}/articles/submit`, article)
  return data
}
