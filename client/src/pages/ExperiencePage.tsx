import React, { useEffect } from 'react'
import styles from './ExperiencePage.module.css'

export default function ExperiencePage() {
	useEffect(() => {
		document.title = 'Experience | Miriam Espino'
	}, [])
	return (
		<div>
			<main style={{padding: '2rem'}}>
				<h1 className={styles.h1}>Experience</h1>
				<p className={styles.text}>Under development</p>
			</main>
		</div>
	)
}
