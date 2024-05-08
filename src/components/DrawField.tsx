import React from 'react'

const DrawField: React.FC<{ drawed: number[], index: number }> = ({ drawed, index }) => {
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
