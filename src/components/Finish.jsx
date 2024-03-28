import React from 'react'

const Finish = ({finish, playerName, playerBoards, points, players, drawed, turn, setPlayerBoards, setPoints, setResult}) => {
	return (
		<>
			<button onClick={() => finish(playerName, playerBoards, points, players, drawed, turn, setPlayerBoards, setPoints, setResult)}>集計</button>
		</>
	)
}

export default Finish
