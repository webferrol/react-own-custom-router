import HomePage from './pages/HomePage'
import { Router } from './Router'
import AboutPage from './pages/AboutPage'
import Page404 from './pages/Page404'

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
      <Router routes={Routes} defaultComponent={Page404} />
    </main>
  )
}
