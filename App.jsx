import { useState } from 'react'

function HomePage () {
  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About page</h1>
    </>
  )
}

export default function App () {
  const [location, setLocation] = useState(window.location.pathname)

  return (
    <div className='app-container'>
      <a href='/' onClick={() => setLocation(window.location.pathname)}>Home</a>
      <a href='about' onClick={() => setLocation(window.location.pathname)}>About</a>
      <br />

      {JSON.stringify(window.location)}

      {location === '/' ? <HomePage /> : <AboutPage />}
    </div>
  )
}
