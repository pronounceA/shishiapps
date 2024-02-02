export const draw = (deck, drawed, turn, playerBoards, 
		setDrawed, setDeck, setPlayerBoards,setBurstComment, setStealComment, setStealCard) => {
	
	let playerBoardsOrta = [];
	playerBoards.map((playerBoard, i) => {
		playerBoardsOrta[i] = playerBoard;
	})
	let drawedOrta = drawed.slice();
	let stealFlag = true;

	if (drawed[turn]) {
		console.log(playerBoardsOrta[turn]);
		playerBoardsOrta[turn].push(drawed[turn]);
		drawed[turn] = 0;
		playerBoardsOrta[turn] = playerBoardsOrta[turn].sort((a, b) => a - b);
		console.log(playerBoardsOrta[turn]);
		setPlayerBoards(playerBoardsOrta);
	}
	let deckOrta = deck.slice();
	let card = deckOrta.pop();

	// この動作何？
	// playerBoardsOrta[turn] = [];
	// console.log(playerBoardsOrta);

	//バースト条件
	//バーストの場合は横取りは発生しない
	if (playerBoards[turn].length >= 3 && playerBoards[turn].includes(card)) {
		// console.log(playerBoardsOrta);
		stealFlag = false;
		burstAnnounce(turn, setBurstComment, card);
	}

	//playerBoardsから、playerBoards[turn]を削除して、それ以外を一次の配列にする
	let playerBoardsOrta2 = [];
	playerBoards.map((playerBoard, i) => {
		if(i !== turn) playerBoardsOrta2[i] = playerBoard;
	})
	playerBoardsOrta2 = playerBoardsOrta2.flat(Infinity);

	console.log(playerBoardsOrta2);


	//横取り条件
	if (stealFlag && playerBoardsOrta2.includes(card)) {
		setStealCard(card);
		setStealComment(`${card}を横取りしますか?`);
	}

	drawedOrta[turn] = card;
	setDrawed(drawedOrta);
	setDeck(deckOrta);
}

	/*
	// ターン変更
	// ターン上限(プレイヤー数 - 1)に到達した場合、0に戻す
	*/
export const changeTurn = (prevTurn, players, playerBoards, points, drawed, setDrawed, setPlayerBoards, setPoints, setTurn) => {
	let drawedOrta = drawed.slice();
	// console.log(drawedOrta[0]);
	// console.log(drawedOrta[1]);
	// console.log(drawed[0]);
	// console.log(drawed[1]);
	let playerBoardsOrta = [];
	// console.log(playerBoardsOrta);
	playerBoards.map((playerBoard, i) => {
		playerBoardsOrta[i] = playerBoard.slice();
		// console.log(playerBoardsOrta);
		// console.log(playerBoard);
	});
	// console.log(playerBoards[0]);
	// console.log(playerBoards[1]);
	// console.log(playerBoardsOrta[0]);
	// console.log(playerBoardsOrta[1]);

	if(drawedOrta[prevTurn] !== 0) {
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
	
	let nextTurn = 0;
	if (prevTurn === (players - 1)) {
		setTurn(nextTurn);
	} else {
		nextTurn = prevTurn + 1;
		setTurn((prev) => prev + 1);
	}

	playerBoardsSum(nextTurn, playerBoardsOrta, points, setPlayerBoards, setPoints);
}

/*
// changeTurn実行後に実行。
// playerBoardsの合計値を計算しpointsに加える。
// その後、playerBoardsを消去。
*/
const playerBoardsSum = (nextTurn, playerBoards, points, setPlayerBoards, setPoints) => {
	let playerBoardsOrta = [];
	let pointsOrta = points.slice();
	playerBoards.map((playerBoard, i) => {
		playerBoardsOrta[i] = playerBoard.slice();
	});
	pointsOrta[nextTurn] = playerBoards[nextTurn].reduce((sum, point) => {
		return sum + point;
	}, pointsOrta[nextTurn])
	
	playerBoardsOrta[nextTurn] = [];
	
	setPlayerBoards(playerBoardsOrta);
	setPoints(pointsOrta);
}

export const finish = (playerBoards, points, players, drawed, turn, setPlayerBoards, setPoints, setResult) => {
	let pointsOrta = points.slice();
	let playerBoardsOrta = [];

	// console.log(playerBoards);

	playerBoards.map((playerBoard, i) => {
		// console.log(playerBoard);
		// console.log(i);
		playerBoardsOrta[i] = playerBoard.slice();
	})

	// console.log(playerBoards[0]);
	// console.log(playerBoards[1]);

	playerBoards.forEach((playerBoard, i) => {
		if(playerBoard.length !== 0) {
			playerBoard.forEach((card, j) =>{
				pointsOrta[i] += card;
			}) 
		}
	});

	for (let i = 0; i < players; i++) {
		playerBoardsOrta[i] = [];
	}

	let pointsOrta2 = pointsOrta.slice();

	console.log(pointsOrta2);

	//勝者判定
	let max = Math.max(...pointsOrta2);
	let index_max = [];
	let index = pointsOrta2.indexOf(max);
	let i = 0



	while(index !== -1 && i < 5) {
		index_max.push(index);
		pointsOrta2[index] = 0;
		index = pointsOrta2.indexOf(max);
	}

	setPlayerBoards(playerBoardsOrta);
	setPoints(pointsOrta);

	let resultSentence;
	index_max.map((winner, i) => {
		index_max[i] = "プレイヤー" + winner
	})	
	resultSentence = index_max.join(",") + "の勝利です。"

	setResult(resultSentence);
}

/*
//バースト
//ドローしたカードと同じカードが既にplayerBoardsに存在する場合にplayerBoards[turn]を空にする
*/
export const burst = (turn, players, playerBoards, points, drawed, setPlayerBoards, setPoints, setTurn, setBurstComment, setDrawed) => {
	console.log(playerBoards);
	let playerBoardsOrta = [];
	playerBoards.map((playerBoard, i) => {
		playerBoardsOrta[i] = playerBoard.slice();
	});
	console.log(playerBoardsOrta);
	console.log(playerBoardsOrta[0]);
	playerBoardsOrta[turn] = [];
	console.log(playerBoardsOrta);
	setPlayerBoards(playerBoardsOrta);
	setBurstComment('');
	console.log(drawed);
	let drawedOrta = drawed.slice();
	drawedOrta[turn] = 0;
	console.log(drawedOrta);
	setDrawed(drawedOrta);
	changeTurn(turn, players, playerBoardsOrta, points, drawedOrta, setDrawed, setPlayerBoards, setPoints, setTurn);
}

const burstAnnounce = (turn, setBurstComment, card) => {
	setBurstComment(`プレイヤー${turn}はバーストしました。引いたカード：${card}`);
}

export const steal = (turn, playerBoards, stealCard, setPlayerBoards, setStealComment, setStealCard) => {
	let playerBoardsExceptTurnPlayer = [];
	let playerBoardsOrta = [];
	let playerBoardsOrta2 = [];
	playerBoards.map((playerBoard, i) => {
		playerBoardsOrta[i] = playerBoard;
		if (i !== turn) playerBoardsExceptTurnPlayer[i] = playerBoard;
	})
	let flatPlayerBoardsETP = playerBoardsExceptTurnPlayer.flat(Infinity);
	let filterFlatPlayerBoardsEPT = flatPlayerBoardsETP.filter((num) => {
		return num === stealCard
	})
	console.log(filterFlatPlayerBoardsEPT);
	console.log(playerBoardsOrta);
	playerBoardsOrta[turn] = playerBoardsOrta[turn].concat(filterFlatPlayerBoardsEPT).sort((a, b) => a - b);
	console.log(playerBoardsOrta);

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