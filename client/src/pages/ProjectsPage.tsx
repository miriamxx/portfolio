import React, { useEffect } from 'react'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
	useEffect(() => {
		document.title = 'Projects | Miriam Espino'
	}, [])
	return (
		<div>
			<main style={{padding: '2rem'}}>
				<h1 className={styles.h1}>Projects</h1>
				<p className={styles.text}>Under development</p>
			</main>
		</div>
	)
}
