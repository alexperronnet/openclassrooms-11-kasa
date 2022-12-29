import { useState, useEffect } from 'react'
import apiMock from '@/api/api-mock.json'

type Accommodation = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

type FetchDataResult = {
  data: Accommodation[]
  loading: boolean
  error: Error | null
}

export const useFetchData = (): FetchDataResult => {
  const [data, setData] = useState<Accommodation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(apiMock)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        } else {
          setError(null)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
