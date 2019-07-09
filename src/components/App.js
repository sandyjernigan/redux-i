import './App.css'
import React from 'react'
import Balances from './Balances'
import Deposit from './Deposit'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			checking: 0,
			savings: 0,
		}
	}

	makeDeposit = (amount, account) => {
		this.setState({
			[account]: parseInt(amount),
		})
	}

	render() {
		const { checking, savings } = this.state
		const total = checking + savings

		return (
			<div className="app">
				<Balances total={total} checking={checking} savings={savings} />
				<Deposit total={total} makeDeposit={this.makeDeposit} />
			</div>
		)
	}
}

export default App
