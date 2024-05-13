const Total: React.FC<{ points: number[], index: number }> = ({ points, index }) => {

	return (
		<div className='total'>
			合計：{points[index]}
		</div>
	)
}

export default Total;