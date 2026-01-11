import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <a className={styles.toTop} href="#myPage" title="To Top">
        <span className="glyphicon glyphicon-chevron-up" />
      </a>
      <p>2024 Miriam Espino | Bootstrap theme by W3schools, images and icons by Unsplash and Logomakr. Artwork created by me.</p>
    </footer>
  )
}
