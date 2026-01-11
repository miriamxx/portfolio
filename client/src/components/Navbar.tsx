import React from 'react'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#myPage">Miriam Espino</a>
        </div>
        <div className="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">PROGRAMMING LANGUAGES</a></li>
            <li><a href="#portfolio">RESUME</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#art">MY ART</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
