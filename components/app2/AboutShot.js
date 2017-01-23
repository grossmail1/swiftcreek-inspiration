import React from "react"
import Radium from 'radium'
import Comment from 'material-ui/svg-icons/communication/comment';
import Like from 'material-ui/svg-icons/action/thumb-up';
import View from 'material-ui/svg-icons/action/pageview';

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

const AboutBar = (props) => {
	return (
		<div style={[about, props.hovered && {transform: 'translateY(50px)'}]}>
			<p style={[pStyle, {margin: '0 0 0 5px', overflow: 'hidden', textOverlow: 'ellipsis', whiteSpace: 'nowrap'}]}>{props.shot.title}</p>
			<p style={pStyle}>
				<span style={{margin: '0 5px'}}>
					<View style={{height: 16}}/>
					{props.shot.views_count}
				</span>
				<span style={{margin: '0 5px'}}>
					<Comment style={{height: 15}}/>
					{props.shot.comments_count}
				</span>
				<span style={{margin: '0 5px'}}>
					<Like style={{height: 15}}/>
					{props.shot.likes_count}
				</span>
			</p>
		</div>
	)
}

export default Radium(AboutBar)