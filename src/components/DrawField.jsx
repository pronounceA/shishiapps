import React from 'react'

const DrawField = ({drawed, index}) => {
	return (
		<div className='draw-field'>
			{drawed[index] !== 0 &&
				(
					<div className={'draw card-' + drawed[index]} />
				)
			}
		</div>
	)
}

export default DrawField
