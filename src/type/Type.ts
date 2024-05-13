export type PlayerBoardsType = PlayerBoardType[];

export type PlayerBoardType = number[];

export type BurstCommentType = {
	burst: BurstType,
	playerName: string[],
	turn: number,
	players: number,
	playerBoards: PlayerBoardsType,
	points: number[],
	drawed: number[],
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>,
	setTurn: React.Dispatch<React.SetStateAction<number>>,
	setBurstComment: React.Dispatch<React.SetStateAction<string>>,
	setDrawed: React.Dispatch<React.SetStateAction<number[]>>,
	burstComment: string
};

export type BurstType = (
	playerName: string[],
	turn: number,
	players: number,
	playerBoards: PlayerBoardsType,
	points: number[],
	drawed: number[],
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>,
	setTurn: React.Dispatch<React.SetStateAction<number>>,
	setBurstComment: React.Dispatch<React.SetStateAction<string>>,
	setDrawed: React.Dispatch<React.SetStateAction<number[]>>
) => void;

export type DrawType = (
	playerName: string[],
	deck: number[],
	drawed: number[],
	turn: number,
	playerBoards: PlayerBoardsType,
	setDrawed: React.Dispatch<React.SetStateAction<number[]>>,
	setDeck: React.Dispatch<React.SetStateAction<number[]>>,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setBurstComment: React.Dispatch<React.SetStateAction<string>>,
	setStealComment: React.Dispatch<React.SetStateAction<string>>,
	setStealCard: React.Dispatch<React.SetStateAction<number>>
) => void;

export type PlayerBoardsSumType = (
	nextTurn: number,
	playerBoards: PlayerBoardsType,
	points: number[],
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>
) => void;

export type FinishType = (
	playerName: string[],
	playerBoards: PlayerBoardsType,
	points: number[],
	players: number,
	drawed: number[],
	turn: number,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>,
	setResult: React.Dispatch<React.SetStateAction<string>>
) => void;

export type ChangeTurnType = (
	prevTurn: number,
	players: number,
	playerBoards: PlayerBoardsType,
	points: number[],
	drawed: number[],
	setDrawed: React.Dispatch<React.SetStateAction<number[]>>,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>,
	setTurn: React.Dispatch<React.SetStateAction<number>>,
) => void;

export type BurstAnnounceType = (
	playerName: string[],
	turn: number,
	setBurstComment: React.Dispatch<React.SetStateAction<string>>,
	card: number
) => void;

export type StealType = (
	turn: number,
	playerBoards: PlayerBoardsType,
	stealCard: number,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setStealComment: React.Dispatch<React.SetStateAction<string>>,
	setStealCard: React.Dispatch<React.SetStateAction<number>>
) => void;

export type Flatten = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export type CountDrawedType = (
	playerBoard: PlayerBoardType,
	num: number
) => string;

export type ChangeTurnButtonType = {
	changeTurn: ChangeTurnType,
	turn: number,
	players: number,
	playerBoards: PlayerBoardsType,
	points: number[],
	drawed: number[],
	setDrawed: React.Dispatch<React.SetStateAction<number[]>>,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>,
	setTurn: React.Dispatch<React.SetStateAction<number>>
}

export type DrawedsContainerType = {
	playerBoard: PlayerBoardType,
	countDrawed: CountDrawedType,
	index: number
}

export type FinishComponent = {
	finish: FinishType,
	playerName: string[],
	playerBoards: PlayerBoardsType,
	points: number[],
	players: number,
	drawed: number[],
	turn: number,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setPoints: React.Dispatch<React.SetStateAction<number[]>>,
	setResult: React.Dispatch<React.SetStateAction<string>>
}

export type StealCommentComponent = {
	stealComment: string,
	steal: StealType,
	turn: number,
	playerBoards: PlayerBoardsType,
	stealCard: number,
	setPlayerBoards: React.Dispatch<React.SetStateAction<PlayerBoardsType>>,
	setStealComment: React.Dispatch<React.SetStateAction<string>>,
	setStealCard: React.Dispatch<React.SetStateAction<number>>
}