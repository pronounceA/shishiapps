import React from 'react'

const StartButton = ({gameStart}) => {
	return (
		<div>
			<button onClick={gameStart}>スタート</button>
		</div>
	)
}

export default StartButton