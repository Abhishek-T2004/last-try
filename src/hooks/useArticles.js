import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../lib/api'

export function useArticles(filters = {}) {
  return useQuery({
    queryKey: ['articles', filters],
    queryFn: () => fetchArticles(filters),
  })
}
