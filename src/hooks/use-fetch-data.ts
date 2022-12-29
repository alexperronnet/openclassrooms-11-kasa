import { useState, useEffect } from 'react'
import { AccommodationTypes, ApiResultTypes } from '@/types'

export const useFetchData = (url: string): ApiResultTypes => {
  const [data, setData] = useState<AccommodationTypes[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
      } catch (error) {
        error instanceof Error && setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}
