import { useState, useEffect } from 'react'
import MyButton from './MyButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

const Start = ({setPlayers, setGameFlag, players, playerName, setPlayerName}) => {

	const [nameBrank, setNameBrank] = useState("");

	const changePlayers = (players) => {
		setPlayers(players);
		console.log(`players=${players}`);
	}

	const gameStart = () => {
		for (let i = 0; i < players; i++) {
			if (playerName[i] === "") {
				setNameBrank("名前がブランクのプレイヤーがいます。")
				return;
			}
			if (playerName[i].length > 20) {
				setNameBrank("名前が20文字以上のプレイヤーがいます。")
				return;
			}
		}
		setGameFlag(true);
	}

	const changedName = (i, val) => {
		playerName[i] = val;
		setPlayerName(playerName);
		// console.log(`i= ${i}`);
		// console.log(`val = ${val}`);
		// console.log(playerName);
	}

	useEffect(() => {
		const newPlayers = [];
		for (let i = 0; i < players; i++) {
			newPlayers[i] = "";
		}
		// console.log(newPlayers);
		setPlayerName(newPlayers);
	}, [players])

	return (
		<div>
			{nameBrank &&
				(
					<Alert variant="danger">
						{nameBrank}
					</Alert>
				)
			}
			<div className="player-num">
				<div>プレイヤー数：</div>
				<div>
					<select onChange={(e) => changePlayers(e.target.value)}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
				</div>
			</div>
			<div className="players-name">
				{playerName.map((name, i) => {
					return(
						<div className="player">
							<div>
								プレイヤー{i + 1}：
							</div>
							<input type="text" id={i} onChange={(e) => changedName(e.target.id, e.target.value)}/>
						</div>
					)
				})}
			</div>
			<MyButton logic={gameStart}>スタート</MyButton>
		</div>
	)
}

export default Start
