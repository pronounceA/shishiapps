import { useState } from 'react';
import Start from './Start'
import Board from './Board'

const CollectDaruma = () => {
	const [players, setPlayers] = useState(1);
	const [gameFlag, setGameFlag] = useState(false);

	return (
		<div>
			{gameFlag ? 
				<Board players={players}/> 
			: 
				<Start setPlayers={setPlayers} setGameFlag={setGameFlag}/>
			}
		</div>
	)
}

export default CollectDaruma
