import React, { useEffect } from 'react'
import styles from './AboutPage.module.css'

export default function AboutPage() {
	useEffect(() => {
		document.title = 'About | Miriam Espino'
	}, [])
	return (
		<div>
			<main style={{padding: '2rem'}}>
				<h1 className={styles.h1}>About</h1>
				<p className={styles.text}>Under development</p>
			</main>
		</div>
	)
}
