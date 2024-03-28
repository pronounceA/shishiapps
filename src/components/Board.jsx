import { useState, useEffect } from "react";
import { makeDeck } from "../logic/InitLogic";
import { draw, changeTurn, burst, steal, finish, countDrawed} from "../logic/Logic";
import Total from "./Total";
import DrawedsContainer from "./DrawedsContainer";
import DrawField from "./DrawField";
import PlayerName from "./PlayerName";
import Result from "./Result";
import Finish from "./Finish";
import StealComment from "./StealComment";
import BurstComment from "./BurstComment";
import ChangeTurnButton from "./ChangeTurnButton";
import Deck from "./Deck";

const Board = ({players, playerName}) => {

	const [playerBoards, setPlayerBoards] = useState([]);
	const [deck, setDeck] = useState([0]);
	const [drawed, setDrawed] = useState([]);
	const [turn, setTurn] = useState(0);
	const [points, setPoints] = useState([]);
	const [burstComment, setBurstComment] = useState("");
	const [gameset, setGameset] = useState(false);
	const [result, setResult] = useState("");
	const [stealComment, setStealComment] = useState(false);
	const [stealCard, setStealCard] = useState(0);
	
	useEffect(() => {
		makeDeck(setDeck);
		
		let playersBoardsInit = [];
		let drawedInit = [];
		let pointsInit = [];
		for (let i = 0; i < players; i++) {
			playersBoardsInit[i] = []; 
			drawedInit[i] = 0;
			pointsInit[i] = 0;
		}
		setPlayerBoards(playersBoardsInit);
		setDrawed(drawedInit);
		setPoints(pointsInit);
	}, []);

	useEffect (() => {
		if (deck.length === 0) {
			setGameset(true);
			let playerBoardsOrta = playerBoards.slice();
			playerBoardsOrta[turn].push(drawed[turn]);
			playerBoardsOrta[turn] = playerBoardsOrta[turn].sort((a, b) => a - b);
			setDrawed([]);
		}
	}, [deck])

	return (
		<>
			<div className='information'>
				{!burstComment && !stealComment && !gameset &&
					<button onClick={() => draw(playerName, deck, drawed, turn, playerBoards, setDrawed, setDeck, setPlayerBoards, setBurstComment, setStealComment, setStealCard)}>
						ドロー
					</button>
				}
				{!burstComment && !stealComment && !gameset &&
					<ChangeTurnButton 
						changeTurn={changeTurn} 
						turn={turn} 
						players={players} 
						playerBoards={playerBoards} 
						points={points} 
						drawed={drawed} 
						setDrawed={setDrawed} 
						setPlayerBoards={setPlayerBoards} 
						setPoints={setPoints} 
						setTurn={setTurn}
					/>
				}
				{burstComment &&
					<BurstComment 
						burst={burst} 
						playerName={playerName} 
						turn={turn} 
						players={players} 
						playerBoards={playerBoards} 
						points={points} 
						drawed={drawed} 
						setPlayerBoards={setPlayerBoards} 
						setPoints={setPoints} 
						setTurn={setTurn} 
						setBurstComment={setBurstComment} 
						setDrawed={setDrawed} 
						burstComment={burstComment}
					/>
				}
				{stealComment &&
					<StealComment 
						stealComment={stealComment} 
						steal={steal} 
						turn={turn} 
						playerBoards={playerBoards} 
						stealCard={stealCard} 
						setPlayerBoards={setPlayerBoards} 
						setStealComment={setStealComment} 
						setStealCard={setStealCard}
					/>
				}
				{gameset && !burstComment && !stealComment && !result &&
					<Finish 
						finish={finish} 
						playerName={playerName} 
						playerBoards={playerBoards} 
						points={points}
						players={players} 
						drawed={drawed} 
						turn={turn} 
						setPlayerBoards={setPlayerBoards} 
						setPoints={setPoints} 
						setResult={setResult}
					/>
				}
				{result &&
					<Result result={result} />
				}
				</div>
			<div className="board">
				<Deck deck={deck} />
				{playerBoards.map((playerBoard, index) => {
					 return (
						<div className='player-board' key={index}>
							<PlayerName playerName={playerName} index={index} turn={turn} />
							<div className="card-field">
								<DrawField drawed={drawed} index={index}/>
								<div className='drawed-cards-container'>
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={1} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={2} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={3} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={4} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={5} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={6} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={7} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={8} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={9} />
									<DrawedsContainer playerBoard={playerBoard} countDrawed={countDrawed} index={10} />
								</div>
							</div>
							<Total points={points} index={index} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Board
