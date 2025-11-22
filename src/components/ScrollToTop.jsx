import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash, try to scroll to the element; otherwise scroll to top
    if (hash) {
      const id = hash.replace('#', '')
      // small timeout to allow new route to render
      setTimeout(() => {
        const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 60)
      return
    }

    // Default: scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}
