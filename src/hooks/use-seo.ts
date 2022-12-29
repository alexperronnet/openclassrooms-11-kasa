import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  page: string
}

export const useSeo = ({ page }: SeoProps) => {
  const headRef = useRef(document.head)
  const location = useLocation()
  const title = `Kasa — ${page}`
  const url = `https://kasa.alexperronnet.dev${location.pathname}`

  useEffect(() => {
    if (headRef.current === null) {
      headRef.current = document.head
    }

    const titleElement = headRef.current.querySelector('title')
    if (titleElement) {
      titleElement.innerHTML = title
    }

    const metaTitleElement = headRef.current.querySelector('meta[name="title"]')
    if (metaTitleElement) {
      metaTitleElement.setAttribute('content', title)
    }

    const ogTitleElement = headRef.current.querySelector('meta[property="og:title"]')
    if (ogTitleElement) {
      ogTitleElement.setAttribute('content', title)
    }

    const ogUrlElement = headRef.current.querySelector('meta[property="og:url"]')
    if (ogUrlElement) {
      ogUrlElement.setAttribute('content', url)
    }

    const twitterTitleElement = headRef.current.querySelector('meta[property="twitter:title"]')
    if (twitterTitleElement) {
      twitterTitleElement.setAttribute('content', title)
    }

    const twitterUrlElement = headRef.current.querySelector('meta[property="twitter:url"]')
    if (twitterUrlElement) {
      twitterUrlElement.setAttribute('content', url)
    }
  }, [page, location.pathname])

  return null
}
