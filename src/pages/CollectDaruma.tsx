import * as React from 'react';
import Start from '../components/Start'
import Board from '../components/Board'

const CollectDaruma = () => {
	const [players, setPlayers] = React.useState<number>(2);
	const [playerName, setPlayerName] = React.useState<string[]>([]);
	const [gameFlag, setGameFlag] = React.useState<boolean>(false);

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
