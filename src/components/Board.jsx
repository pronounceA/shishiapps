import { useState, useEffect } from "react";
import { makeDeck } from "../logic/InitLogic";
import { draw, changeTurn, burst, steal, finish, countDrawed} from "../logic/Logic";
import MyButton from "./MyButton";

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
					<button onClick={() => 
					draw(playerName, deck, drawed, turn, playerBoards, setDrawed, setDeck, setPlayerBoards, setBurstComment, setStealComment, setStealCard)}>ドロー</button>
				}
				{!burstComment && !stealComment && !gameset &&
					<button onClick={() => {
						changeTurn(turn, players, playerBoards, points, drawed, setDrawed, setPlayerBoards, setPoints, setTurn);
					}}>ターン変更</button>
				}
				{burstComment &&
					<>
						<button className='burst-button' onClick={() => burst(playerName, turn, players, playerBoards, points, drawed, setPlayerBoards, setPoints, setTurn, setBurstComment, setDrawed)}>OK</button>
						<div className='burst-comment'>{burstComment}</div>
					</>
				}
				{stealComment &&
					<>
						<div className='stealComment'>{stealComment}</div>
						<button onClick={() => steal(turn, playerBoards, stealCard, setPlayerBoards, setStealComment, setStealCard)}>はい</button>
						<button onClick={() => setStealComment("")}>いいえ</button>
					</>
				}
				{gameset && !burstComment && !stealComment && !result &&
					<>
						<button onClick={() => finish(playerName, playerBoards, points, players, drawed, turn, setPlayerBoards, setPoints, setResult)}>集計</button>
					</>
				}
				{result &&
					<>
						<div>{result}</div>
						<div></div>
					</>
				}
			</div>
			<div className="board">
				<div>デッキ枚数：{deck.length}</div>
				{playerBoards.map((playerBoard, index) => {
					return (
					<div className='player-board' key={index}>
						<div className="player-name">{playerName[index]}</div>
						<div className="card-field">
							<div className='draw-field'>
								{drawed[index] !== 0 &&
									(
									<div className={'draw card-' + drawed[index]}>
									</div>
									)
								}
							</div>
							<div className='drawed-cards-container'>
								{playerBoard.includes(1) &&
									(
										<div className='draweds-container'>
											<div className='card-1 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 1)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(2) &&
									(
										<div className='draweds-container'>
											<div className='card-2 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 2)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(3) &&
									(
										<div className='draweds-container'>
											<div className='card-3 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 3)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(4) &&
									(
										<div className='draweds-container'>
											<div className='card-4 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 4)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(5) &&
									(
										<div className='draweds-container'>
											<div className='card-5 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 5)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(6) &&
									(
										<div className='draweds-container'>
											<div className='card-6 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 6)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(7) &&
									(
										<div className='draweds-container'>
											<div className='card-7 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 7)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(8) &&
									(
										<div className='draweds-container'>
											<div className='card-8 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 8)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(9) &&
									(
										<div className='draweds-container'>
											<div className='card-9 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 9)
													}
											</div>
										</div>
									)
								}
								{playerBoard.includes(10) &&
									(
										<div className='draweds-container'>
											<div className='card-10 drawed-cards' />
												<div className='card-count'>
													{
														countDrawed(playerBoard, 10)
													}
											</div>
										</div>
									)
								}
							</div>
						</div>
						<div className='total'>
							合計：{points[index]}
						</div>
					</div>
					)
				})}
			</div>
		</>
	)
}

export default Board
