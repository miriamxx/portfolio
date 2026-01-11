import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import './App.css'

export default function App(){
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}
