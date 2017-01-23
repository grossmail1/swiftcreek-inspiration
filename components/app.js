import React, { Component } from 'react';
import Assets from './Assets'
import Liabilities from './Liabilities'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			assets: null,
			liabilities: null
		}
	}

	onAssetChange = (total) => {
		this.setState({ ...this.state, assets: total })
	}
	onLiabilityChange = (total) => {
		this.setState({ ...this.state, liabilities: total })
	}

	render() {
		return (
			<div>
				<div style={{
					textAlign: 'center',
					backgroundImage: 'linear-gradient(#104D8C 0, #0861BE 100%)',
					color: '#fff',
					padding: '10px 0',
					marginBottom: 15
				}}>
					<div style={{ maxWidth: 980, width: '90%', margin: '0 auto' }}>
						<h1 style={{ margin: 0 }}>Personal Financial Profile</h1>
					</div>
				</div>
				<div style={{ maxWidth: 980, width: '90%', margin: '0 auto' }}>
					<div style={{ marginBottom: 10 }}>
						<label style={{ display: 'block' }}>
							<span style={{ width: '60px', display: 'inline-block' }}>Name:</span>
							<input type="text" style={{ border: 'none', borderBottom: '1px solid gainsboro' }}/>
						</label>
						<label style={{ display: 'block' }}>
							<span style={{ width: '60px', display: 'inline-block' }}>Date:</span>
							<input type="text" style={{ border: 'none', borderBottom: '1px solid gainsboro' }}/>
						</label>
					</div>
					<Assets onTotalChange={this.onAssetChange}/>
					<Liabilities onTotalChange={this.onLiabilityChange} totalAssets={this.state.assets}/>
					<p> This app stores all of the data you enter into your browser's local storage.  This allows you to leave, come back, and have your data persist. However, your data won't be accessible across multiple browsers/devices. I can work on that later if you are truly interested. Also, I know it currently looks a little jank on a phone.</p>
				</div>
			</div>
		);
	}
}
