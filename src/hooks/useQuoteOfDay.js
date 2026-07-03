import { useQuery } from '@tanstack/react-query'
import { fetchQuoteOfDay } from '../lib/api'

export function useQuoteOfDay() {
  return useQuery({
    queryKey: ['quoteOfDay'],
    queryFn: fetchQuoteOfDay,
  })
}
