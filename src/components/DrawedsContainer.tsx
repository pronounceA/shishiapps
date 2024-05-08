import React from 'react'
import { DrawedsContainerType } from '../type/Type'


const DrawedsContainer: React.FC<DrawedsContainerType> = ({ playerBoard, countDrawed, index }) => {
	return (
		<>
			{playerBoard.includes(index) &&
				(
					<div className='draweds-container'>
						<div className={'card-' + index + ' drawed-cards'} />
						<div className='card-count'>
							{
								countDrawed(playerBoard, index)
							}
						</div>
					</div>
				)
			}
		</>
	)
}

export default DrawedsContainer
