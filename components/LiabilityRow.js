import React from "react"

const rowStyle = {
	borderBottom: '1px solid gainsboro',
	height: 30
}

const LiabilityRow = (props) => {
	return (
		<tr style={rowStyle}>
			<td>{props.category}</td>
			<td>
				$<input onChange={(event) => {
				props.onInputChange(props.name, 'month', event.target.value)
			}} value={props.month}/>
			</td>
			<td style={{textAlign: 'right'}}>
				<div>
				<input onChange={(event) => {
					props.onInputChange(props.name, 'apr', event.target.value)
				}} value={props.apr} style={{width: 55}}/>&nbsp;%</div>
			</td>
			<td style={{textAlign: 'right'}}>
				$<input onChange={(event) => {
				props.onInputChange(props.name, 'total', event.target.value)
			}} value={props.total}/>
			</td>
		</tr>
	)
}

export default LiabilityRow