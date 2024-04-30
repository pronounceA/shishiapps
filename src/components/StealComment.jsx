import React from 'react'

const StealComment = ({ stealComment, steal, turn, playerBoards, stealCard, setPlayerBoards, setStealComment, setStealCard }) => {
	return (
		<>
			<div className='stealComment'>{stealComment}</div>
			<button onClick={() => steal(turn, playerBoards, stealCard, setPlayerBoards, setStealComment, setStealCard)}>はい</button>
			<button onClick={() => setStealComment("")}>いいえ</button>
		</>
	)
}

export default StealComment
