import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// SPA не перезагружает страницу при переходе, поэтому прокрутку наверх сбрасываем сами
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
