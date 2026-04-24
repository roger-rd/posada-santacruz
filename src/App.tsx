import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'
import ExperiencesPage from './pages/ExperiencesPage'
import RestaurantPage from './pages/RestaurantPage'
import CafeRoutePage from './pages/CafeRoutePage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import PromotionsPage from './pages/PromotionsPage'
import AboutPage from './pages/AboutPage'
import BookingPage from './pages/BookingPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimationInit() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Small delay so DOM is ready after route change
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible')
        obs.observe(el)
      })
      return () => obs.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <AnimationInit />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habitaciones" element={<RoomsPage />} />
          <Route path="/habitaciones/:id" element={<RoomsPage />} />
          <Route path="/experiencias" element={<ExperiencesPage />} />
          <Route path="/experiencias/:id" element={<ExperiencesPage />} />
          <Route path="/restaurante" element={<RestaurantPage />} />
          <Route path="/ruta-cafe" element={<CafeRoutePage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/promociones" element={<PromotionsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/reservar" element={<BookingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
