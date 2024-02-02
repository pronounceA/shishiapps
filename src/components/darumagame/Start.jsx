import React from 'react'
import StartButton from './StartButton'

const Start = ({setPlayers, setGameFlag}) => {

	const changePlayers = (players) => {
		setPlayers(players);
		console.log(players);
	}

	const gameStart = () => {
		console.log("start");
		setGameFlag(true);
	}

	return (
		<div>
			プレイヤー数:
			<select onChange={(e) => changePlayers(e.target.value)}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
			<StartButton gameStart={gameStart} />
		</div>
	)
}

export default Start
