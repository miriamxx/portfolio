import React, { useEffect } from 'react'
import styles from './ContactPage.module.css'

export default function ContactPage() {
	useEffect(() => {
		document.title = 'Contact | Miriam Espino'
	}, [])
	return (
		<div>
			<main style={{padding: '2rem'}}>
				<h1 className={styles.h1}>Contact</h1>
				<p className={styles.text}>Under development</p>
			</main>
		</div>
	)
}
