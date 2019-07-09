import React from 'react'

function Balances(props) {
	const { total, checking, savings } = props

	return (
		<section>
			<h1 className="total">Available Balance: ${total}</h1>
			
			<ul className="balances">
				<li>Checking: ${checking}</li>
				<li>Savings: ${savings}</li>
			</ul>
		</section>
	)
}

export default Balances