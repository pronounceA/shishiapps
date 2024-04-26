import { useState } from 'react';
import Start from '../components/Start'
import Board from '../components/Board'

const CollectDaruma = () => {
	const [players, setPlayers] = useState(2);
	const [playerName, setPlayerName] = useState([]);
	const [gameFlag, setGameFlag] = useState(false);

	/*
	/
	*/
	return (
		<div>
			{gameFlag ?
				<Board players={players} playerName={playerName} />
				:
				<Start setPlayers={setPlayers} setGameFlag={setGameFlag} players={players} playerName={playerName} setPlayerName={setPlayerName} />
			}
		</div>
	)
}

export default CollectDaruma
