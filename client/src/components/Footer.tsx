import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerHeading}>Get in touch</div>
        <p className={styles.contactText}>Interested in collaborating on a project, seeking support with implementing digital accessibility, or looking for mentorship? Feel free to connect with me on LinkedIn.</p>
        <div className={styles.contactInfo}>
          <a href="mailto:miriamespino01@gmail.com" className={styles.contactLink}>
            <span className={styles.icon}>✉️</span>
            <span>miriamespino01@gmail.com</span>
          </a>
          <a href="http://linkedin.com/in/miriam-espino-cambron" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <span className={styles.icon}>🔗</span>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2026 Miriam Espino Cambron. All rights reserved.</p>
      </div>
    </footer>
  )
}
