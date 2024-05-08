import React from 'react'

const Result: React.FC<{ result: string }> = ({ result }) => {
	return (
		<>
			<div>{result}</div>
			<div></div>
		</>
	)
}

export default Result
