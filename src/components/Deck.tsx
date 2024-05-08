import React from 'react'

const Deck: React.FC<{ deck: number[] }> = ({ deck }) => {
	return (
		<>
			<div className='deck'>
				{deck.length}
			</div>
		</>
	)
}

export default Deck	