import React from 'react'

const ChangeTurnButton = ({ changeTurn, turn, players, playerBoards, points, drawed, setDrawed, setPlayerBoards, setPoints, setTurn }) => {
	return (
		<button onClick={() => { changeTurn(turn, players, playerBoards, points, drawed, setDrawed, setPlayerBoards, setPoints, setTurn) }}>
			ターン変更
		</button>
	)
}

export default ChangeTurnButton
