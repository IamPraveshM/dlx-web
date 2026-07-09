import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // run on every navigation change
    const doScroll = async () => {
      try {
        const lenis = typeof window !== 'undefined' ? window.lenis : null
        if (lenis && typeof lenis.scrollTo === 'function') {
          // use lenis to scroll to top smoothly
          // prefer calling scrollTo with options; if not supported, fallback
          try {
            lenis.scrollTo(0, { immediate: false, duration: 1 })
          } catch (e) {
            // some Lenis versions accept only (target) signature
            try { lenis.scrollTo(0) } catch (err) { window.scrollTo({ top: 0, behavior: 'smooth' }) }
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } catch (err) {
        // safe fallback
        window.scrollTo({ top: 0 })
      }
    }

    // small timeout to allow route content to render before scrolling
    const t = setTimeout(doScroll, 50)
    return () => clearTimeout(t)
  }, [location.pathname, location.hash])

  return null
}
