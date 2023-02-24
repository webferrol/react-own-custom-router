import { useState } from 'react'

function HomePage () {
  return (
    <>
      <h1>Home page</h1>
      <a href='/about'>About</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About page</h1>
      <a href='/'>Home</a>
    </>
  )
}

export default function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main className='app-container'>
      <a href='/' onClick={() => setCurrentPath(window.location.pathname)}>Home</a>
      <a href='about' onClick={() => setCurrentPath(window.location.pathname)}>About</a>
      <br />

      {JSON.stringify(window.location)}

      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
