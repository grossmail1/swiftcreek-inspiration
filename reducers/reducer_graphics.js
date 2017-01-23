const initialState = {
	dribbble: null,
	unsplash: null
}

const graphics = (state = initialState, action) => {
	switch(action.type) {
		case 'DRIBBBLE_SUCCESS':
			return { ...state, dribbble: action.shots}
			case 'UNSPLASH_SUCCESS':
			return { ...state, unsplash: action.unsplash}
		default:
			return state
	}
}

export default graphics