import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar(){
  return (
    <nav className={styles.navbarContainer}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
          <Link className={styles.brand} to="/home">Home</Link>
          <div className="navbar-collapse">
            <ul className={styles.navList}>
              <li><a className={styles.navLink} href="/about">About</a></li>
              <li><a className={styles.navLink} href="/experience">Experience</a></li>
              <li><Link className={styles.navLink} to="/projects">Projects</Link></li>
              <li><Link className={styles.navLink} to="/art">Art</Link></li>
              <li><a className={styles.navLink} href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
