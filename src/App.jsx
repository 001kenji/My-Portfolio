import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Journey from './pages/Journey'
import Social from './pages/Social'
import Contact from './pages/Contact'
import StarField from './components/three/StarField'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">

      {/* 3D interactive warp background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarField />
      </div>

      {/* Subtle grid overlay — very faint */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-30" />

      {/* Deep blue top glow */}
      <div
        className="fixed top-0 left-0 right-0 h-96 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.14) 0%, transparent 65%)',
        }}
      />

      {/* Ion (cyan) bottom glow */}
      <div
        className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Pages */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<Home />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/skills"    element={<Skills />} />
          <Route path="/journey"   element={<Journey />} />
          <Route path="/social"    element={<Social />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
