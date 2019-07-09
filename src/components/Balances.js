import React from 'react'

function Balances(props) {
	const total = props.checking + props.savings
	
	return (
		<section>
			<h1 className="total">Available Balance: ${total}</h1>
			
			<ul className="balances">
				<li>Checking: ${props.checking}</li>
				<li>Savings: ${props.savings}</li>
			</ul>
		</section>
	)
}

export default Balances