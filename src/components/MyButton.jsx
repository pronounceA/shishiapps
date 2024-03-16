import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const MyButton = ({logic, children}) => {
	return (
		<div>
			<Button onClick={logic} variant="outline-primary">{children}</Button>
		</div>
	)
}

export default MyButton