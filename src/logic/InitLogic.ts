/*
//  デッキ作成
//
//  初期デッキ
//  1~5...13枚
//  6~10...9枚
//  計110枚 
*/
export const makeDeck = (setDeck: React.Dispatch<React.SetStateAction<number[]>>): void => {
	const deckInit: Array<number> = new Array();
	let initCount: number;

	for (let i = 1; i <= 10; i++) {
		initCount = i <= 5 ? 13 : 9;
		for (let j = 0; j < initCount; j++) {
			deckInit.push(i);
		}
	}

	setDeck(shuffle(deckInit));
}

/*
//  デッキシャッフル
*/
export const shuffle = (deck: number[]): number[] => {
	const deckOrta: number[] = deck.slice();
	let r: number;
	let tmp: number;

	for (let i = 0; i < deck.length; i++) {
		r = Math.floor(Math.random() * (deck.length - 1));

		tmp = deckOrta[i];
		deckOrta[i] = deckOrta[r];
		deckOrta[r] = tmp;
	}
	return deckOrta;
}