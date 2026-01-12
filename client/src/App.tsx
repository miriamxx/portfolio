import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/experience" element={<ExperiencePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/art" element={<ArtPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
