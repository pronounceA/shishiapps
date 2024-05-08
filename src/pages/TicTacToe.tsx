import * as React from 'react';

const Board: React.FC<{
	xIsNext: boolean,
	squares: string[] | null,
	onPlay: (sq: string[]) => void
}> = ({ xIsNext, squares, onPlay }) => {

	const handleClick = (i: number): void => {
		if (squares![i] || calculateWinner(squares!)) {
			return;
		}
		const nextSquares: string[] = squares!.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	}

	const winner: string | null = calculateWinner(squares!);
	let status;

	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares![0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares![1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares![2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares![3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares![4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares![5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares![6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares![7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares![8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	)
}

const calculateWinner = (squares: string[]): string | null => {
	const lines: number[][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

const Square: React.FC<{
	value: string,
	onSquareClick: () => void
}> = ({ value, onSquareClick }) => {

	return (
		<button className="square" onClick={onSquareClick}>{value}</button>
	);
}

const Game: React.FC = () => {
	const [xIsNext, setXIsNext] = React.useState<boolean>(true);
	const [history, setHistory] = React.useState<(string[] | null)[]>([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = React.useState<number>(0);

	const currentSquares: string[] | null = history[currentMove];

	const handlePlay = (nextSquares: string[]): void => {
		const nextHistory: (string[] | null)[] = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		setXIsNext(!xIsNext);
	}

	const jumpTo = (nextMove: number): void => {
		setCurrentMove(nextMove);
		setXIsNext(nextMove % 2 === 0);
	}

	const moves: React.JSX.Element[] = history.map((squares: string[] | null, move: number) => {
		let description;

		if (move > 0) {
			description = 'Go to move#' + move;
		} else {
			description = 'Go to game start';
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

export default Game;