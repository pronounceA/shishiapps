import * as React from 'react'
import { BurstCommentType } from '../type/Type'

const BurstComment: React.FC<BurstCommentType> = ({
	burst,
	playerName,
	turn,
	players,
	playerBoards,
	points,
	drawed,
	setPlayerBoards,
	setPoints,
	setTurn,
	setBurstComment,
	setDrawed,
	burstComment
}) => {
	return (
		<>
			<button className='burst-button' onClick={() => burst(playerName, turn, players, playerBoards, points, drawed, setPlayerBoards, setPoints, setTurn, setBurstComment, setDrawed)}>OK</button>
			<div className='burst-comment'>{burstComment}</div>
		</>
	)
}

export default BurstComment
