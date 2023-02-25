import { useState, useEffect } from 'react'

function navigate (href) {
  // history.pushState() anexa un registro en la sesión de historial del navegador
  window.history.pushState({}, '', href) // No refresca la página

  // Crear un evento personalizado
  const navigationEvent = new Event(import.meta.env.VITE_PUSHSTATE)

  window.dispatchEvent(navigationEvent)
}

function HomePage (props) {
  const { pathname } = props
  return (
    <>
      <h1>Home page</h1>
      <strong>{pathname}</strong><br />
      <button onClick={() => navigate('/about')}>About</button>
    </>
  )
}

function AboutPage ({ pathname }) {
  return (
    <>
      <h1>About page</h1>
      <strong>{pathname}</strong><br />
      <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}

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
      {currentPath === '/' && <HomePage pathname={currentPath} />}
      {currentPath === '/about' && <AboutPage pathname={currentPath} />}
    </main>
  )
}
