import React, { useEffect } from 'react'
import styles from './ArtPage.module.css'

export default function ArtPage() {
	useEffect(() => {
		document.title = 'Art | Miriam Espino'
	}, [])
	return (
		<div>
			<main style={{padding: '2rem'}}>
				<h1 className={styles.h1}>Art</h1>
				<p className={styles.text}>Under development</p>
			</main>
		</div>
	)
}
