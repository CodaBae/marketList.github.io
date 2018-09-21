import { combinReducers } from 'redux';
import itemReducer from './itemReducer';

export default combinReducers({
	item: itemReducer
});
 