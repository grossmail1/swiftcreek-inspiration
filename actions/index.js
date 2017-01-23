import axios from 'axios'
// const parser = require('../../node_modules/rss-parser/dist/rss-parser.js')
import $ from 'jquery'

export const fetchDribbbleShots = () => {
	return dispatch => {
		axios.get('https://api.dribbble.com/v1/shots?access_token=353d329298cc78de3cdf225ce826ed12d136f8526ab55f2fc836b00ef44c4ff3').then(response => {
			dispatch(dribbbleSuccess(response.data))

		})
	}
}

export const fetchUnsplash = () => {
	return dispatch => {

		axios.get('https://api.unsplash.com/photos/?client_id=f069d35a87e5bb716c8ec5d6a337edba03a3778ccbcfca2b0229dc45b4b0ccce&per_page=16').then(response => {
			dispatch(unsplashSuccess(response.data))
		})
	}
}

export const unsplashSuccess = (unsplash) => {
	return {
		type: 'UNSPLASH_SUCCESS',
		unsplash
	}
}



export const dribbbleSuccess = (shots) => {
	return {
		type: 'DRIBBBLE_SUCCESS',
		shots
	}
}
