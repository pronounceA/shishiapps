import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Start: React.FC<{
	setPlayers: React.Dispatch<React.SetStateAction<number>>,
	setGameFlag: React.Dispatch<React.SetStateAction<boolean>>,
	players: number,
	playerName: string[],
	setPlayerName: React.Dispatch<React.SetStateAction<string[]>>
}> = ({ setPlayers, setGameFlag, players, playerName, setPlayerName }) => {

	const [nameBrank, setNameBrank] = React.useState<string>('');
	const [show, setShow] = React.useState<boolean>(false);

	const handleClose = (): void => setShow(false);
	const handleShow = (): void => setShow(true);

	const changePlayers = (players: string): void => {
		setPlayers(parseInt(players));
	}

	const gameStart = (): void => {
		for (let i = 0; i < players; i++) {
			if (playerName[i] === '') {
				setNameBrank('名前がブランクのプレイヤーがいます。')
				return;
			}
			if (playerName[i].length > 20) {
				setNameBrank('名前が20文字以上のプレイヤーがいます。')
				return;
			}
		}
		setGameFlag(true);
	}

	const changedName = (i: number, val: string): void => {
		playerName[i] = val;
		setPlayerName(playerName);
		// console.log(`i= ${i}`);
		// console.log(`val = ${val}`);
		// console.log(playerName);
	}

	React.useEffect(() => {
		const newPlayers: string[] = [];
		for (let i = 0; i < players; i++) {
			newPlayers[i] = '';
		}
		// console.log(newPlayers);
		setPlayerName(newPlayers);
	}, [players])

	return (
		<>
			<div className='start-detail'>
				{nameBrank &&
					(
						<Alert variant='danger'>
							{nameBrank}
						</Alert>
					)
				}
				<div className='player-num'>
					<div>プレイヤー数：</div>
					<div>
						<select onChange={(e) => changePlayers(e.target.value)}>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
				</div>
				<div className='players-name'>
					{playerName.map((name: string, i: number) => {
						return (
							<div className='player'>
								<div>
									プレイヤー{i + 1}：
								</div>
								<input type='text' id={i.toString()} onChange={(e) => changedName(parseInt(e.target.id), e.target.value)} />
							</div>
						)
					})}
				</div>
				<button onClick={() => gameStart()}>スタート</button>
				<div>
					<FontAwesomeIcon icon={faCaretRight} />
					<button className='rule-button' onClick={handleShow}>ルール</button>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>ルール</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					手番が来たら、山札からカードを一枚引くか、手番を終えるかを選びます。<br />
					カードは1～10でその数字がそのまま得点となります。同じ数字の枚数が多ければそれだけ点数が増えることになります。<br />
					山札は1~5のカードが13枚、6~10のカードが9枚で、合計110枚あります。<br />
					<br />
					<h4>手版の強制終了</h4>
					自分の手番で引いたカード（まだ得点化できていない「予約カード」 ）が3枚以上ある時に、そのいずれかと同じ数字のカードを山札から引いてしまうと手番終了です。<br />
					その手番で引いた「予約カード」は全部捨て、次の人の番です。<br />
					<br />
					<h4>カードの得点化</h4>
					1周まわって自分の番になった時、手元に「予約カード」が残っていれば、それらを裏向きにして得点として確定できます。<br />
					<br />
					<h4>カードの横取り</h4>
					山札から引いたカードと同じカードを他のプレイヤーが「予約カード」として持っていれば、それらすべてを「横取り」することができます。<br />
					<br />
					<h4>ゲーム終了</h4>
					山札の最後のカードが引かれ、その手番を終えたらゲーム終了です。<br />
					各自「予約カード」を裏向きにして、獲得したすべてのカードを合計します。点数が高い人が勝ちです。<br />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Start
