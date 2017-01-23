import React, { PropTypes } from 'react'
import Radium from 'radium'

const rowStyle = {
	borderBottom: '1px solid gainsboro',
	height: 30
}

const AssetRow = (props) => {
	const onInputChange = (event) => {
		props.onInputChange(props.name, event.target.value)
	}
	return (
		<tr style={rowStyle}>
			<td>{props.category}</td>
			<td style={{textAlign: 'right'}}>$
				<input type="text" value={props.value} onChange={onInputChange}/>
			</td>
		</tr>
	)
}

AssetRow.propTypes = {
	category: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired
}

export default Radium(AssetRow)