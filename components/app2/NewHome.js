import React from "react"
import Radium from 'radium'
import {Link as routerLink} from 'react-router'
const Link = Radium(routerLink)

const NewHome = (props) => {
	return (
		<div style={{width: '100%', height: '100%', backgroundColor: '#005AF4', textAlign: 'center',color: '#fff', paddingTop: 100}}>
			<h1>New site coming</h1>
			<h2>Until then check out some development news</h2>
			<Link style={{color: '#fff', margin: 10, fontSize: '1.75em', border: '2px solid #fff', padding: '10px', ':hover': {backgroundColor: '#0C4FC1', cursor: 'pointer'}}} to="/news">Show me the news</Link>
		</div>
	)
}

export default NewHome