type PlayerBoardType = number[];
type PlayerBoardsType = PlayerBoardType[];

const a: PlayerBoardType = [1, 2, 3];
const b: PlayerBoardType = [4, 5, 6];
const c: PlayerBoardType = [7, 8, 9];

const board: number[] = a.concat(b).concat(c)

const board2: PlayerBoardsType = [a, [], c];

const boardFlat: any = board2.flat(Infinity);