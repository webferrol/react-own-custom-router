import { useEffect, useState } from 'react'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  const Page = routes.find(({ path }) => path === currentPath)?.Component // optional chaining para que no pete
  return Page ? <Page /> : <DefaultComponent />
}
