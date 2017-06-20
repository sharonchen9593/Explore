import { combineReducers } from 'redux';
import ImagesReducer from './reducer_images';


const rootReducer = combineReducers({
	images: ImagesReducer
});

export default rootReducer;