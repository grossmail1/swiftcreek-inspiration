import React, { Component } from "react"
import Radium from 'radium'
import AboutBar from './AboutShot'


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

class Shot extends Component{
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
				<a href={props.shot.html_url} style={{width: '100%', height: 'auto'}}>
					<img src={props.shot.images.normal} style={{width: '100%', height: 'auto', display: 'block'}}/>
				</a>
				<AboutBar hovered={this.state.hovered} shot={props.shot}/>
			</div>
		)
	}

}

export default Radium(Shot)