import { combineReducers } from 'redux';
import Assets from './reducer_assets';
import Liabilities from './reducer_liabilities';
import Graphics from './reducer_graphics'

const rootReducer = combineReducers({
	assets: Assets,
	liabilities: Liabilities,
	graphics: Graphics
});

export default rootReducer;
