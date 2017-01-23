import React, { PropTypes } from 'react'
import Radium from 'radium'
import Like from 'material-ui/svg-icons/action/thumb-up';

const about = {
	position: 'absolute',
	width: '100%',
	left: 0,
	bottom: '100%',
	zIndex: 100,
	height: 50,
	backgroundColor: 'rgba(255,255,255, .8)',
	transition: 'all .35s ease-in-out',
	boxShadow: 'rgba(0, 0, 0, .5) 0 0 3px 0',
	fontSize: 'smaller'
}
const pStyle = {
	lineHeight: '25px',
	margin:0
}

const AboutSplash = (props) => {
	return (
		<div style={[about, props.hovered && {transform: 'translateY(50px)'}]}>
			<a href={props.splash.user.links.html} style={[pStyle, {height: 50,display: 'inline-flex', alignItems: 'center', color: '#005AF4', paddingLeft: 10, boxSizing: 'border-box'}]}>
				<img src={props.splash.user.profile_image.medium} style={{width: 40, height: 40, borderRadius: '50%', marginRight: 10}}/>

				{props.splash.user.name}
				<span style={{margin: '0 5px'}}>
					<Like style={{height: 15}}/>
					<span style={{color: '#000'}}>{props.splash.likes}</span>
				</span>
			</a>

		</div>
	)
}
AboutSplash.propTypes = {}

export default Radium(AboutSplash)