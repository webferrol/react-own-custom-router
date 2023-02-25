import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    // Nos subscribimos
    window.addEventListener(import.meta.env.VITE_PUSHSTATE, onLocationChange)
    // Hay que subscribirse también al envento de ir haca atras
    window.addEventListener(import.meta.env.VITE_POPSTATE, onLocationChange)

    return () => {
      // Eliminamos las subscripciónes
      window.removeEventListener(import.meta.env.VITE_PUSHSTATE, onLocationChange)
      window.removeEventListener(import.meta.env.VITE_POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main className='app-container'>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
