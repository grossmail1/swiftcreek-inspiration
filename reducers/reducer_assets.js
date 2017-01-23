const initialState = {
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

const assets = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export default assets