import React from 'react'

const Deck = ({ deck }) => {
	return (
		<>
			<div className='deck'>
				{deck.length}
			</div>
		</>
	)
}

export default Deck