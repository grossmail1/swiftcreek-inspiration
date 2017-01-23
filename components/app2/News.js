import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import { fetchDribbbleShots, fetchUnsplash } from '../../actions/index'
import Shot from './Shot'
import Unsplash from './Unsplash'

@Radium
class News extends Component {

	constructor(props) {
		super(props)

		this.state = {
			display: 'DRIBBBLE'
		}
	}


	componentWillMount() {
		this.props.fetchDribbbleShots()
		this.props.fetchUnsplash()
	}

	renderImages = () => {
		const { display } = this.state

		if( display === 'DRIBBBLE') {
			return this.props.dribbble ? this.props.dribbble.map((shot, index) => <Shot key={`${shot.id}-${index}`} shot={shot}/>):null
		} else if (display === 'UNSPLASH') {
			return this.props.unsplash ? this.props.unsplash.map((splash, index) => <Unsplash key={`${splash.id}-${index}`} splash={splash}/>):null
		}
	}


	render() {
		return (
			<div style={{width: '100%', height: '100%', position: 'relative'}}>
				<header style={{width: '100%', backgroundColor: '#fff', height: 50, position: 'fixed', top: 0, zIndex: 10}}>
					Swift Creek Sof
					<button style={{border: '1px solid gainsboro', padding: '5px 15px', display: 'inline-block'}} onClick={() => {console.log('trying to set state');this.setState({display: this.state.display === 'DRIBBBLE' ? 'UNSPLASH' : 'DRIBBBLE'})}}>{this.state.display === 'DRIBBBLE' ? 'Unsplash me' : 'dribbble me'}</button>
				</header>
				<div style={{width: '100%', paddingTop: 50}}>
					<div style={{ height: 'calc( 100% - 50px)', display: 'inline-block', overflow: 'none'}}>{this.renderImages()}</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		dribbble: state.graphics.dribbble,
		unsplash: state.graphics.unsplash
	}
}
export default connect(mapStateToProps, { fetchDribbbleShots, fetchUnsplash })(News)