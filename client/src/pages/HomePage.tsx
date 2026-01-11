import React from 'react'

export default function HomePage() {
	return (
		<div>
			<header>
				<nav>
					<ul style={{display: 'flex', gap: '1rem', listStyle: 'none'}}>
						<li><a href="#experience">experience</a></li>
						<li><a href="#about">about</a></li>
						<li><a href="#contact">contact</a></li>
					</ul>
				</nav>
			</header>

			<main style={{padding: '2rem'}}>
				<h1>My portfolio</h1>
			</main>
		</div>
	)
}
