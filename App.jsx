import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Router } from './Router'

const Routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/contact',
    Component: () => <h1>Contacto</h1>
  }
]

export default function App () {
  return (
    <main className='app-container'>
      <Router routes={Routes} />
    </main>
  )
}
