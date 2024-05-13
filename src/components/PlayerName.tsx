import React from 'react'

const PlayerName: React.FC<{ playerName: string[], index: number, turn: number }> = ({ playerName, index, turn }) => {

	if (index === turn)
		return <div className='player-name turn-player'>{playerName[index]}</div>
	else
		return <div className='player-name'>{playerName[index]}</div>
}

export default PlayerName
