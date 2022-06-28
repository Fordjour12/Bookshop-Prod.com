import React from 'react'
import Homepage from './components/pages/homepage'
import './scss/stylesheet.scss'
// import BackgroundImage from './assets/phantom Icon/phantom 2.png'

const App = () => {
	return (
		<>
			<Homepage />
			{/* <div
				style={{
					width: '100%',
					height: '100vh',
					display: 'grid',
					placeContent: 'center',
				}}
			>
				<img
					src={BackgroundImage}
					style={{
						// maxWidth: '150px',
						display: 'grid',
						justifyItems: 'center',
						alignItems: 'center',
					}}
					alt='image'
				/>
			</div> */}
		</>
	)
}

export default App
