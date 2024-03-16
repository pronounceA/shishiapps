/*
//  デッキ作成
//
//  初期デッキ
//  1~5...13枚
//  6~10...9枚
//  計110枚 
*/
export const makeDeck = (setDeck) => {
	let deckInit = new Array();
	let initCount;

	for(let i = 1; i <= 10; i++) {
		initCount = i <= 5 ? 13 : 9; 
		for (let j = 0; j < initCount; j++) { 
			deckInit.push(i);
		}
	}

	// setDeck(shuffle(deckInit));
	setDeck([1,1,1,2,3]);
}

/*
//  デッキシャッフル
*/
export const shuffle = (deck) => {
	let deckOrta = deck.slice();
	for (let i = 0; i < deck.length; i++) {
		let r = Math.floor(Math.random() * (deck.length - 1));

		let tmp = deckOrta[i];
		deckOrta[i] = deckOrta[r];
		deckOrta[r] = tmp;
	}
	return deckOrta;
}

