import { useState, useEffect } from 'react'
import MyButton from './MyButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Start = ({setPlayers, setGameFlag, players, playerName, setPlayerName}) => {

	const [nameBrank, setNameBrank] = useState("");
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const changePlayers = (players) => {
		setPlayers(players);
		console.log(`players=${players}`);
	}

	const gameStart = () => {
		for (let i = 0; i < players; i++) {
			if (playerName[i] === "") {
				setNameBrank("名前がブランクのプレイヤーがいます。")
				return;
			}
			if (playerName[i].length > 20) {
				setNameBrank("名前が20文字以上のプレイヤーがいます。")
				return;
			}
		}
		setGameFlag(true);
	}

	const changedName = (i, val) => {
		playerName[i] = val;
		setPlayerName(playerName);
		// console.log(`i= ${i}`);
		// console.log(`val = ${val}`);
		// console.log(playerName);
	}

	useEffect(() => {
		const newPlayers = [];
		for (let i = 0; i < players; i++) {
			newPlayers[i] = "";
		}
		// console.log(newPlayers);
		setPlayerName(newPlayers);
	}, [players])

	return (
		<>
			<div className='start-detail'>
				{nameBrank &&
					(
						<Alert variant="danger">
							{nameBrank}
						</Alert>
					)
				}
				<div className="player-num">
					<div>プレイヤー数：</div>
					<div>
						<select onChange={(e) => changePlayers(e.target.value)}>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>
				</div>
				<div className="players-name">
					{playerName.map((name, i) => {
						return(
							<div className="player">
								<div>
									プレイヤー{i + 1}：
								</div>
								<input type="text" id={i} onChange={(e) => changedName(e.target.id, e.target.value)}/>
							</div>
						)
					})}
				</div>
				<MyButton logic={gameStart} cn={'start'}>スタート</MyButton>
				<div>
					<FontAwesomeIcon icon={faCaretRight} />
					<button className='rule-button' onClick={handleShow}>ルール</button>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
		</>
	)
}

export default Start
