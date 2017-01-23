import React, { PropTypes, Component } from 'react'
import Radium from 'radium'
import AboutSplash from './AboutSplash'

const shotWrapper = {
	display: 'inline-block',
	boxShadow: 'rgba(0, 0, 0, .5) 0 0 3px 0',

	margin: '1.5%',
	width: '47%',
	position: 'relative',
	overflow: 'hidden',
	boxSizing: 'border-box',
	'@media (min-width: 851px) and (max-width: 1050px)' : {
		margin: '.65%',
		width: '32%',
	},
	'@media (min-width: 1051px)' : {
		margin: '1%',
		width: '23%',
	}
}

class Unsplash extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hovered: false
		}
	}
	render() {
		const {props} = this
		return (
			<div style={shotWrapper}
				 onMouseEnter={() => {this.setState({hovered:true})}}
				 onMouseLeave={() => {this.setState({hovered:false})}}>
				<a href={props.splash.links.html} style={{width: '100%', height: 'auto'}}>
					<img src={props.splash.urls.regular} style={{width: '100%', height: 'auto', display: 'block'}}/>
				</a>
				<AboutSplash hovered={this.state.hovered} splash={props.splash}/>
			</div>
		)
	}
}
Unsplash.propTypes = {}

export default Radium(Unsplash)