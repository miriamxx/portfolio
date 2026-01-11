import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ElementsPage from './pages/ElementsPage'
import Footer from './components/Footer'
import './App.css'

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/elements" element={<ElementsPage/>} />
        <Route path="/projects" element={<HomePage/>} />
        <Route path="/art" element={<HomePage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
