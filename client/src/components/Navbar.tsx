import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar(){
  return (
    <nav className={styles.navbarContainer}>
      <div className="container">
        <div className="navbar-header">
          <Link className={styles.brand} to="/">Miriam Espino</Link>
        </div>
        <div className="navbar-collapse">
          <ul className={styles.navList}>
            <li><a className={styles.navLink} href="#about">ABOUT</a></li>
            <li><a className={styles.navLink} href="#services">PROGRAMMING LANGUAGES</a></li>
            <li><a className={styles.navLink} href="#portfolio">RESUME</a></li>
            <li><Link className={styles.navLink} to="/projects">PROJECTS</Link></li>
            <li><Link className={styles.navLink} to="/art">MY ART</Link></li>
            <li><a className={styles.navLink} href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
