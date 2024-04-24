import React from 'react'
import { useState } from 'react'

const B = () => {

	const [state, setState] = useState('');

	const testfunc = () => {
		setState('a');
		setState('b');
	};

	return (
		<div>
			<button onClick={() => testfunc()}>a</button>
			<p>{state}</p>
		</div>
	)
}

export default B
