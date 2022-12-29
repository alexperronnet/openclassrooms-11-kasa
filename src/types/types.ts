export type AccommodationTypes = {
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

export type ApiResultTypes = {
  data: AccommodationTypes[]
  loading: boolean
  error: Error | null
}
