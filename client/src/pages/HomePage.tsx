import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

export default function HomePage() {
	useEffect(() => {
		document.title = 'Miriam Espino - Home'
	}, [])
	return (
		<div>
			<main style={{padding: '2rem'}}>
				<h1 className={styles.h1}>Hi, welcome!</h1>
				<div className={styles.heroSection}>
					<div className={styles.imageContainer}>
						<img src="/src/assets/images/ChatGPT-miriam-profile.png" alt="Cartoon profile picture of Miriam" className={styles.profileImage} />
						<img src="/src/assets/images/miriam-profile-v1.jpg" alt="Real profile picture of Miriam" className={styles.profileImageHover} />
					</div>
					<p className={styles.introText}>
					I'm Miriam Espino, a software engineer passionate about creating impactful digital experiences with accessibility in mind. I am based out of Atlanta, GA and have 5 years of experience in Software Engineering. Explore my portfolio to see my <Link to="/projects" className={styles.link}>projects</Link> and <Link to="/art" className={styles.link}>artworks</Link>!
					</p>
				</div>
			</main>
		</div>
	)
}
