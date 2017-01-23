import React, { Component } from 'react'
import Radium from 'radium'
import LiabilityRow from './LiabilityRow'
import CircleOutline from 'material-ui/svg-icons/content/add-circle-outline'

@Radium
class Liabilities extends Component {

	constructor(props) {
		super(props)

		this.state = JSON.parse(localStorage.getItem('liabilities')) || {
			mortgage: { total: null, apr: null, month: null },
			otherRealEstate: { total: null, apr: null, month: null },
			cars: [],
			creditCards: [],
			otherDebts: [],
		}
	}

	addCar = () => {
		const index = this.state.cars.length + 1
		const car = {
			category: `Car #${index} payment`,
			name: `car${index}`,
			total: null,
			apr: null,
			month: null
		}

		this.setState({ ...this.state, cars: [ ...this.state.cars, car ] })

	}

	onInputChange = (name, field, value) => {
		this.setState({ ...this.state, [name]: { ...this.state[ name ], [field]: value } })
	}

	onCarChange = (name, field, value) => {
		const cars = this.state.cars.map(car => {
			if (car.name === name) {
				console.log('car change', car, name, field, value)
				return { ...car, [field]: value }
			}
			return car
		})
		this.setState({ ...this.state, cars })
	}

	renderCars = () => {
		if (this.state.cars) {
			return this.state.cars.map(car => {
				return (
					<LiabilityRow key={car.name} {...car} onInputChange={this.onCarChange}/>
				)
			})
		}

		return null
	}

	addCreditCard = () => {
		const index = this.state.creditCards.length + 1
		const creditCard = {
			category: `Card #${index}`,
			name: null,
			total: null,
			apr: null,
			month: null
		}

		this.setState({ ...this.state, creditCards: [ ...this.state.creditCards, creditCard ] })

	}

	onCreditCardChange = (name, field, value) => {
		const creditCards = this.state.creditCards.map(card => {
			if (card.name === name) {
				return { ...card, [field]: value }
			}
			return card
		})
		this.setState({ ...this.state, creditCards })
	}

	renderCreditCards = () => {
		if (this.state.creditCards) {
			return this.state.creditCards.map(creditCard => {
				return (
					<LiabilityRow key={creditCard.name} {...creditCard} onInputChange={this.onCreditCardChange}/>
				)
			})
		}

		return null
	}

	addOtherDebt = () => {
		const index = this.state.otherDebts.length + 1
		const otherDebt = {
			category: `Debt #${index}`,
			name: null,
			total: null,
			apr: null,
			month: null
		}

		this.setState({ ...this.state, otherDebts: [ ...this.state.otherDebts, otherDebt ] })

	}


	onOtherDebtChange = (name, field, value) => {
		const otherDebts = this.state.otherDebts.map(debt => {
			if (debt.name === name) {
				return { ...debt, [field]: value }
			}
			return debt
		})
		this.setState({ ...this.state, otherDebts })
	}

	renderOtherDebts = () => {
		if (this.state.otherDebts) {
			return this.state.otherDebts.map(otherDebt => {
				return (
					<LiabilityRow {...otherDebt} key={otherDebt.name} onInputChange={this.onOtherDebtChange}/>
				)
			})
		}

		return null
	}
	calculateCarTotal = () => {
		let total = 0
		total += (parseFloat(this.state.mortgage.total) || 0)
		total += (parseFloat(this.state.otherRealEstate.total) || 0)
		this.state.cars.forEach(car => {
			total += (parseFloat(car.total) || 0)
		})
		return total
	}

	calculateCarMonth = () => {
		let month = 0
		month += (parseFloat(this.state.mortgage.month) || 0)
		month += (parseFloat(this.state.otherRealEstate.month) || 0)
		this.state.cars.forEach(car => {
			month += (parseFloat(car.month) || 0)
		})
		return month
	}
	calculateOtherTotal = () => {
		let total = 0
		this.state.creditCards.forEach(card => {
			total += (parseFloat(card.total) || 0)
		})
		console.log(total)
		this.state.otherDebts.forEach(other => {
			total += (parseFloat(other.total) || 0)
		})
		console.log(total)
		return total
	}

	calculateOtherMonth = () => {
		let month = 0
		this.state.creditCards.forEach(card => {
			month += (parseFloat(card.month) || 0)
		})
		this.state.otherDebts.forEach(other => {
			month += (parseFloat(other.month) || 0)
		})
		return month
	}

	render() {
		localStorage.setItem('liabilities', JSON.stringify(this.state))
		return (
			<div style={{ marginBottom: 20 }}>
				<div style={{ textAlign: 'center', padding: '3px auto' }}>
					<span
						style={{ fontWeight: 600, textTransform: 'uppercase' }}>What i owe </span>(Liabilities)<br></br>
					<span style={{ fontStyle: 'italic' }}>(Please fill in all sections as well as you can)</span>
				</div>
				<table>
					<thead>
					<tr>
						<th style={{ textAlign: 'left' }}>Category</th>
						<th>Monthly Payments</th>
						<th style={{textAlign: 'right'}}>Interest %</th>
						<th style={{textAlign: 'right'}}>Total Balance</th>
					</tr>
					</thead>
					<tbody>
					<LiabilityRow category="Mortgage / Rent" onInputChange={this.onInputChange} name="mortgage"
								  total={this.state.mortgage.total} apr={this.state.mortgage.apr}
								  month={this.state.mortgage.month}/>
					<LiabilityRow category="Additional Real Estate Loan" onInputChange={this.onInputChange}
								  name='otherRealEstate' total={this.state.otherRealEstate.total}
								  apr={this.state.otherRealEstate.apr} month={this.state.otherRealEstate.month}/>
					<tr style={{ borderBottom: '1px solid gainsboro', height: 30 }}>
						<td colSpan="5" style={{ fontWeight: 600 }}>Cars
							<div onClick={this.addCar} style={{ display: 'inline-block' }}>
								<CircleOutline
									style={{ width: 17, height: 17, marginLeft: 5, verticalAlign: 'middle' }}/>
							</div>
						</td>
					</tr>
					{this.renderCars()}
					<tr style={{ borderBottom: '1px solid gainsboro', height: 35, backgroundColor: '#eee', fontWeight: 600  }}>
						<td style={{textAlign: 'right'}}>Mortgage and Car debt subtotal:</td>
						<td>$<span style={{display: 'inline-block', width:75}}>{this.calculateCarMonth()}</span></td>
						<td></td>
						<td style={{textAlign: 'right'}}>$<span style={{display: 'inline-block', width:75}}>{this.calculateCarTotal()}</span></td>
					</tr>
					<tr style={{ borderBottom: '1px solid gainsboro', height: 30 }}>
						<td colSpan="5" style={{ fontWeight: 600 }}>Credit Cards
							<div onClick={this.addCreditCard} style={{ display: 'inline-block' }}>
								<CircleOutline
									style={{ width: 17, height: 17, marginLeft: 5, verticalAlign: 'middle' }}/>
							</div>
						</td>
					</tr>
					{this.renderCreditCards()}
					<tr style={{ borderBottom: '1px solid gainsboro', height: 30 }}>
						<td colSpan="5"><span style={{ fontWeight: 600 }}>Other Debts</span> (personal loans, student
							loans, business debt, medical, legal, IRS, etc.)
							<div onClick={this.addOtherDebt} style={{ display: 'inline-block' }}>
								<CircleOutline
									style={{ width: 17, height: 17, marginLeft: 5, verticalAlign: 'middle' }}/>
							</div>
						</td>
					</tr>
					{this.renderOtherDebts()}
					<tr style={{ borderBottom: '1px solid gainsboro', height: 35, backgroundColor: '#eee', fontWeight: 600  }}>
						<td style={{textAlign: 'right'}}>Credit Cards and other debts:</td>
						<td>$<span style={{display: 'inline-block', width:75}}>{this.calculateOtherMonth()}</span></td>
						<td></td>
						<td style={{textAlign: 'right'}}>$<span style={{display: 'inline-block', width:75}}>{this.calculateOtherTotal()}</span></td>
					</tr>
					<tr style={{ borderBottom: '1px solid gainsboro', height: 35, backgroundColor: '#eee', fontWeight: 600  }}>
						<td style={{textAlign: 'right'}}>Total Monthly Payments:</td>
						<td>${this.calculateCarMonth()+ this.calculateOtherMonth()}</td>
						<td style={{textAlign: 'right'}}>Total Debt</td>
						<td style={{textAlign: 'right'}}>$<span style={{display: 'inline-block', width:75}}>{this.calculateCarTotal()+ this.calculateOtherTotal()}</span></td>
					</tr>
					<tr style={{ borderBottom: '1px solid gainsboro', height: 35, backgroundColor: '#eee', fontWeight: 600 }}>
						<td></td>
						<td></td>
						<td style={{textAlign: 'right'}}>Net worth</td>
						<td style={{textAlign: 'right'}}>$<span style={{display: 'inline-block', width:75}}>{this.props.totalAssets - (this.calculateCarTotal()+ this.calculateOtherTotal())}</span></td>
					</tr>
					</tbody>
					<tfoot>
					</tfoot>
				</table>
			</div>
		)
	}
}

export default Liabilities