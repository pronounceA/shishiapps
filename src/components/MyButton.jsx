import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const MyButton = ({logic, children, cn}) => {
	return (
		<div>
			<Button onClick={logic} variant="outline-primary" className={cn}>{children}</Button>
		</div>
	)
}

export default MyButton