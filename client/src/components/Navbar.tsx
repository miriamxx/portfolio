import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar(){
  return (
    <nav className={styles.navbarContainer}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
          <Link className={styles.brand} to="/">Home</Link>
          <div className="navbar-collapse">
            <ul className={styles.navList}>
              <li><Link className={styles.navLink} to="/about">About</Link></li>
              <li><Link className={styles.navLink} to="/experience">Experience</Link></li>
              <li><Link className={styles.navLink} to="/projects">Projects</Link></li>
              <li><Link className={styles.navLink} to="/art">Art</Link></li>
              <li><Link className={styles.navLink} to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
