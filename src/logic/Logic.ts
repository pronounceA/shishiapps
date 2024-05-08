import {
	DrawType,
	PlayerBoardsType,
	PlayerBoardType,
	PlayerBoardsSumType,
	FinishType,
	ChangeTurnType,
	BurstType,
	BurstCommentType,
	BurstAnnounceType,
	StealType,
	Flatten,
	CountDrawedType
} from '../type/Type';

export const draw: DrawType = (
	playerName,
	deck,
	drawed,
	turn,
	playerBoards,
	setDrawed,
	setDeck,
	setPlayerBoards,
	setBurstComment,
	setStealComment,
	setStealCard
) => {

	const playerBoardsOrta: PlayerBoardsType = [];
	const drawedOrta: number[] = drawed.slice();
	playerBoards.map((playerBoard, i) => {
		playerBoardsOrta[i] = playerBoard;
	})

	let stealFlag: boolean = true;

	if (drawed[turn]) {
		console.log(playerBoardsOrta[turn]);
		playerBoardsOrta[turn].push(drawed[turn]);
		drawed[turn] = 0;
		playerBoardsOrta[turn] = playerBoardsOrta[turn].sort((a, b) => a - b);
		console.log(playerBoardsOrta[turn]);
		setPlayerBoards(playerBoardsOrta);
	}
	const deckOrta: number[] = deck.slice();
	const card: number | undefined = deckOrta.pop();

	//バースト条件
	//バーストの場合は横取りは発生しない
	if (card !== undefined) {
		if (playerBoards[turn].length >= 3 && playerBoards[turn].includes(card)) {
			stealFlag = false;
			burstAnnounce(playerName, turn, setBurstComment, card);
		}
	}

	//playerBoardsから、playerBoards[turn]を削除して、それ以外を一次元の配列にする
	let playerBoardsOrta2: PlayerBoardsType = [];
	let playerBoardOrta: PlayerBoardType = [];

	playerBoards.map((playerBoard: PlayerBoardType, i: number) => {
		if (i !== turn) playerBoardOrta = playerBoard;
	})
	//playerBoardsOrtaFlat = playerBoardsOrta2.flat(Infinity);

	//console.log(playerBoardsOrta2);


	//横取り条件
	if (card !== undefined) {
		if (stealFlag && playerBoardOrta.includes(card)) {
			setStealCard(card);
			setStealComment(`${card}を横取りしますか?`);
		}
	}

	drawedOrta[turn] = card !== undefined ? card : drawedOrta[turn];
	setDrawed(drawedOrta);
	setDeck(deckOrta);
}

/*
// ターン変更
// ターン上限(プレイヤー数 - 1)に到達した場合、0に戻す
*/
export const changeTurn: ChangeTurnType = (
	prevTurn,
	players,
	playerBoards,
	points,
	drawed,
	setDrawed,
	setPlayerBoards,
	setPoints,
	setTurn
) => {

	const drawedOrta: number[] = drawed.slice();
	// console.log(drawedOrta[0]);
	// console.log(drawedOrta[1]);
	// console.log(drawed[0]);
	// console.log(drawed[1]);
	const playerBoardsOrta: PlayerBoardsType = [];
	// console.log(playerBoardsOrta);
	playerBoards.map((playerBoard: PlayerBoardType, i: number) => {
		playerBoardsOrta[i] = playerBoard.slice();
		// console.log(playerBoardsOrta);
		// console.log(playerBoard);
	});
	// console.log(playerBoards[0]);
	// console.log(playerBoards[1]);
	// console.log(playerBoardsOrta[0]);
	// console.log(playerBoardsOrta[1]);

	if (drawedOrta[prevTurn] !== 0) {
		// console.log(playerBoardsOrta[prevTurn]);
		// console.log(drawedOrta[prevTurn]);
		playerBoardsOrta[prevTurn].push(drawedOrta[prevTurn]);
	}
	// console.log(playerBoardsOrta[prevTurn]);
	// console.log(drawedOrta[prevTurn]);
	// console.log(playerBoardsOrta);
	// console.log(drawedOrta);
	drawedOrta[prevTurn] = 0;

	// console.log(playerBoardsOrta[prevTurn]);
	// console.log(drawedOrta[prevTurn]);
	// console.log(playerBoardsOrta);
	// console.log(drawedOrta);
	setDrawed(drawedOrta);
	setPlayerBoards(playerBoardsOrta);

	let nextTurn: number = 0;
	if (prevTurn === (players - 1)) {
		setTurn(nextTurn);
	} else {
		nextTurn = prevTurn + 1;
		setTurn((prev: number) => prev + 1);
	}

	playerBoardsSum(nextTurn, playerBoardsOrta, points, setPlayerBoards, setPoints);
}

/*
// changeTurn実行後に実行。
// playerBoardsの合計値を計算しpointsに加える。
// その後、playerBoardsを消去。
*/
const playerBoardsSum: PlayerBoardsSumType = (nextTurn, playerBoards, points, setPlayerBoards, setPoints) => {
	const playerBoardsOrta: PlayerBoardsType = [];
	const pointsOrta: number[] = points.slice();

	playerBoards.map((playerBoard: PlayerBoardType, i: number) => {
		playerBoardsOrta[i] = playerBoard.slice();
	});

	pointsOrta[nextTurn] = playerBoards[nextTurn].reduce((sum: number, point: number) => {
		return sum + point;
	}, pointsOrta[nextTurn])

	playerBoardsOrta[nextTurn] = [];

	setPlayerBoards(playerBoardsOrta);
	setPoints(pointsOrta);
}

export const finish: FinishType = (
	playerName,
	playerBoards,
	points, players,
	drawed,
	turn,
	setPlayerBoards,
	setPoints,
	setResult
) => {

	let pointsOrta: number[] = points.slice();
	const playerBoardsOrta: PlayerBoardsType = [];

	// console.log(playerBoards);

	playerBoards.map((playerBoard: PlayerBoardType, i: number) => {
		// console.log(playerBoard);
		// console.log(i);
		playerBoardsOrta[i] = playerBoard.slice();
	})

	// console.log(playerBoards[0]);
	// console.log(playerBoards[1]);

	playerBoards.forEach((playerBoard: PlayerBoardType, i: number) => {
		if (playerBoard.length !== 0) {
			playerBoard.forEach((card: number, j: number) => {
				pointsOrta[i] += card;
			})
		}
	});

	for (let i = 0; i < players; i++) {
		playerBoardsOrta[i] = [];
	}

	const pointsOrta2: number[] = pointsOrta.slice();

	//console.log(pointsOrta2);

	//勝者判定
	const index_max: number[] = [];
	const winners: string[] = [];
	let max: number = Math.max(...pointsOrta2);
	let index: number = pointsOrta2.indexOf(max);
	let i: number = 0



	while (index !== -1 && i < 5) {
		index_max.push(index);
		pointsOrta2[index] = 0;
		index = pointsOrta2.indexOf(max);
	}

	setPlayerBoards(playerBoardsOrta);
	setPoints(pointsOrta);

	let resultSentence;
	index_max.map((winner, i) => {
		winners[i] = playerName[winner];
	})
	resultSentence = winners.join(',') + 'の勝利です。'

	setResult(resultSentence);
}

/*
//バースト
//ドローしたカードと同じカードが既にplayerBoardsに存在する場合にplayerBoards[turn]を空にする
*/
export const burst: BurstType = (
	playerName,
	turn,
	players,
	playerBoards,
	points,
	drawed,
	setPlayerBoards,
	setPoints,
	setTurn,
	setBurstComment,
	setDrawed
) => {

	const playerBoardsOrta: PlayerBoardsType = [];
	playerBoards.map((playerBoard: PlayerBoardType, i: number) => {
		playerBoardsOrta[i] = playerBoard.slice();
	});
	// console.log(playerBoardsOrta);
	// console.log(playerBoardsOrta[0]);
	playerBoardsOrta[turn] = [];
	// console.log(playerBoardsOrta);
	setPlayerBoards(playerBoardsOrta);
	setBurstComment('');
	// console.log(drawed);
	const drawedOrta: number[] = drawed.slice();
	drawedOrta[turn] = 0;
	// console.log(drawedOrta);
	setDrawed(drawedOrta);
	changeTurn(turn, players, playerBoardsOrta, points, drawedOrta, setDrawed, setPlayerBoards, setPoints, setTurn);
}

const burstAnnounce: BurstAnnounceType = (playerName, turn, setBurstComment, card) => {
	setBurstComment(`${playerName[turn]}はバーストしました。引いたカード：${card}`);
}

export const steal: StealType = (
	turn,
	playerBoards,
	stealCard,
	setPlayerBoards,
	setStealComment,
	setStealCard
) => {

	const playerBoardsExceptTurnPlayer: PlayerBoardsType = [];
	const playerBoardsOrta: PlayerBoardsType = [];
	const playerBoardsOrta2: PlayerBoardsType = [];

	playerBoards.map((playerBoard: PlayerBoardType, i: number) => {
		playerBoardsOrta[i] = playerBoard;
		if (i !== turn) playerBoardsExceptTurnPlayer[i] = playerBoard;
	})
	const flatPlayerBoardsETP: FlatArray<PlayerBoardType, Flatten>[] = playerBoardsExceptTurnPlayer.flat(Infinity);
	const filterFlatPlayerBoardsEPT: FlatArray<PlayerBoardType, Flatten>[] = flatPlayerBoardsETP.filter((num: FlatArray<PlayerBoardType, Flatten>) => {
		return num === stealCard
	})
	// console.log(filterFlatPlayerBoardsEPT);
	// console.log(playerBoardsOrta);
	playerBoardsOrta[turn] = playerBoardsOrta[turn].concat((filterFlatPlayerBoardsEPT as number[])).sort((a, b) => a - b);
	// console.log(playerBoardsOrta);

	playerBoardsOrta.map((playerBoard, i) => {
		if (i !== turn) {
			playerBoardsOrta2[i] = playerBoard.filter((num, j) => {
				return num !== stealCard;
			})
		} else {
			playerBoardsOrta2[i] = playerBoard;
		}
	})

	console.log(playerBoardsOrta2);
	console.log(playerBoardsOrta)

	setPlayerBoards(playerBoardsOrta2);
	setStealComment('');
	setStealCard(0);
}

export const countDrawed: CountDrawedType = (playerBoard, num) => {
	let count: number = 0;

	for (let card of playerBoard) {
		if (num === card) {
			count++;
		}
	}

	return '×' + count;
}