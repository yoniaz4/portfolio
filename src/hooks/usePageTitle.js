import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Yohannes Azmeraw`
      : 'Yohannes Azmeraw | Junior Software Engineer'
  }, [title])
}