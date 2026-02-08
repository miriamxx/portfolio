import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import ArtPage from './pages/ArtPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import './App.css'

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/experience" element={<ExperiencePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/art" element={<ArtPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
