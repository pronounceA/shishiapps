import { useState, useEffect } from "react";
import { makeDeck } from "./logic/InitLogic";
import { draw, changeTurn, burst, steal, finish} from "./logic/Logic";

const Board = ({players}) => {

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

	const onClickDraw = (deck, drawed, turn, playerBoards, setDrawed, setDeck, setPlayerBoards, setBurstComment, setStealComment, setStealCard) => {
		draw(deck, drawed, turn, playerBoards, setDrawed, setDeck, setPlayerBoards, setBurstComment, setStealComment, setStealCard);
	}


	return (
		<>
			<div>プレイヤー数：{players}</div>
			<div>デッキ枚数：{deck.length}</div>
			{!burstComment && !stealComment && !gameset &&
				<button onClick={() => 
				onClickDraw(deck, drawed, turn, playerBoards, setDrawed, setDeck, setPlayerBoards, setBurstComment, setStealComment, setStealCard)}>ドロー</button>
			}
			<div>引かれたカード：{drawed.join(",")}</div>
			<div>playerboards数：{playerBoards.length}</div>
			<div>ターン：{turn}</div>
			{!burstComment && !stealComment && !gameset &&
				<button onClick={() => {
					changeTurn(turn, players, playerBoards, points, drawed, setDrawed, setPlayerBoards, setPoints, setTurn);
				}}>ターン変更</button>
			}
			{playerBoards.map((playerBoard, index) => {
				return (
				<div className='player-board' key={index}>
					<div className='drawed-cards'>
						プレイヤー{index}：{playerBoard.join(",")}
					</div>
					<div className='total'>
						合計：{points[index]}
					</div>
				</div>
				)
			})}
			{burstComment &&
				<>
					<div className='burst-comment'>{burstComment}</div>
					<button className='burst-button' onClick={() => burst(turn, players, playerBoards, points, drawed, setPlayerBoards, setPoints, setTurn, setBurstComment, setDrawed)}>OK</button>
				</>
			}
			{stealComment &&
				<>
					<div className='stealComment'>{stealComment}</div>
					<button onClick={() => steal(turn, playerBoards, stealCard, setPlayerBoards, setStealComment, setStealCard)}>はい</button>
					<button onClick={() => setStealComment("")}>いいえ</button>
				</>
			}
			{gameset && !burstComment && !stealComment &&
				<>
					<button onClick={() => finish(playerBoards, points, players, drawed, turn, setPlayerBoards, setPoints, setResult)}>集計</button>
				</>
			}
			{result &&
				<>
					<div>{result}</div>
				</>
			}
		</>
	)
}

export default Board
