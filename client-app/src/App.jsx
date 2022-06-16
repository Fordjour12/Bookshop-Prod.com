import React from 'react'
import './scss/stylesheet.scss'
import logo from './assets/phantom Icon/phantom 2.png'
const App = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'grid',
				placeContent: 'center',
			}}
		>
			<img
				src={logo}
				style={{
					// maxWidth: '150px',
					display: 'grid',
					justifyItems: 'center',
					alignItems: 'center',
				}}
				alt='image'
			/>
		</div>
	)
}

export default App
