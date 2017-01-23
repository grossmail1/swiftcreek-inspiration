import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import AssetRow from './AssetRow'
import CircleOutline from 'material-ui/svg-icons/content/add-circle-outline'
import { find } from 'lodash'

@Radium
class Assets extends Component {


	constructor(props) {
		super(props)

		this.state = JSON.parse(localStorage.getItem('assets')) || {
			checking: null,
			savings: null,
			moneyMarket: null,
			cds: null,
			stocks: null,
			lifeInsurance: null,
			residence: null,
			realEstate: null,
			cars: [],
			personalProperty: null,
			ira: null,
			other: null
		}
	}
	componentWillMount() {
		this.calculateTotal()
	}

	onInputChange = (name, value) => {
		this.setState({ [name]: value })
	}

	onCarChange = (name, value) => {
		const cars = this.state.cars.map(car => {
			if (car.name === name) {
				return {...car, value}
			}
			return car
		})
		this.setState({...this.state, cars})
	}

	calculateTotal = () => {
		let total = 0
		for (name in this.state) {
			const value = this.state[ name ];
			if (Array.isArray(value)) {
				value.forEach(car => {
					total = total + (parseFloat(car.value) || 0)
				})
			}else if (isNaN(value) || !value) {
				// do nothing
			} else {
				total = total + parseFloat(value)
			}
		}
		this.props.onTotalChange(total)
		return total
	}

	renderCars = () => {
		if (this.state.cars) {
			return  this.state.cars.map(car => {
				return (
					<AssetRow category={car.category} onInputChange={this.onCarChange} name={car.name}
							  value={car.value} key={car.name}/>
				)
			})
		}

		return null
	}

	addCar = () => {
		const index = this.state.cars.length + 1
		const car = {
			category: `Car #${index} resale value`,
			name: `car${index}`,
			value: ''
		}

		this.setState({...this.state, cars: [...this.state.cars, car]})

	}

	s

	render() {
		localStorage.setItem('assets', JSON.stringify(this.state))
		return (
			<div style={{marginBottom: 20}} >
				<div style={{ textAlign: 'center', padding: '3px auto' }}>
					<span style={{ fontWeight: 600, textTransform: 'uppercase' }}>What i own </span>(Assets)<br></br>
					<span style={{ fontStyle: 'italic' }}>(Please fill in all sections as well as you can)</span>
				</div>
				<table>
					<thead>
					<tr>
						<th style={{ textAlign: 'left' }}>Category</th>
						<th style={{ textAlign: 'right', paddingRight: 5 }}>Current Values</th>
					</tr>
					</thead>
					<tbody>
					<AssetRow category="Checking Accounts" onInputChange={this.onInputChange} name="checking"
							  value={this.state.checking}/>
					<AssetRow category="Savings Accounts" onInputChange={this.onInputChange} name="savings"
							  value={this.state.savings}/>
					<AssetRow category="Money Market Accounts" onInputChange={this.onInputChange} name="moneyMarket" value={this.state.moneyMarket}/>
					<AssetRow category="Certificates of Deposit" onInputChange={this.onInputChange} name="cds" value={this.state.cds}/>
					<AssetRow category="Stocks / Bonds / Mutual Funds" onInputChange={this.onInputChange}
							  name="stocks" value={this.state.stocks}/>
					<AssetRow category="Life Insurance (Cash Value)" onInputChange={this.onInputChange}
							  name="lifeInsurance" value={this.state.lifeInsurance}/>
					<AssetRow category="Primary Residence (Market Value)" onInputChange={this.onInputChange}
							  name="residence" value={this.state.residence}/>
					<AssetRow category="Other Real Estate" onInputChange={this.onInputChange} name="realEstate" value={this.state.realEstate}/>
					<AssetRow category="Life Insurance (Cash Value)" onInputChange={this.onInputChange} value={this.state.lifeInsurance}/>
					<AssetRow category="Other Personal Property" onInputChange={this.onInputChange}
							  name="personalProperty" value={this.state.personalProperty}/>
					<AssetRow category="IRAs / Retirement Funds / 401k" onInputChange={this.onInputChange} name="ira" value={this.state.ira}/>
					<AssetRow category="Other (i.e. Business ...)" onInputChange={this.onInputChange} name="other" value={this.state.other}/>
					<tr style={{ borderBottom: '1px solid gainsboro', height: 30 }}>
						<td colSpan="2" style={{fontWeight: 600}}>Cars
							<div onClick={this.addCar} style={{display: 'inline-block'}}>
								<CircleOutline style={{width: 17, height: 17, marginLeft: 5, verticalAlign: 'middle'}}/>
							</div>
						</td>
					</tr>
					{this.renderCars()}
					</tbody>
					<tfoot>
					<tr style={{ borderBottom: '1px solid gainsboro', height: 30, backgroundColor: '#eee' }}>
						<th style={{ textAlign: 'right' }}>Total assets</th>
						<td style={{ textAlign: 'right', fontWeight: 600 }}>
							$<span style={{ display: 'inline-block', width: 75 }}>
							{this.calculateTotal()}
							</span>
						</td>
					</tr>
					</tfoot>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}
export default connect(mapStateToProps)(Assets)