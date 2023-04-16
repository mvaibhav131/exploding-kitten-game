import { combineReducers } from 'redux';
import cardReducer from './Reducer/cardReducer';
export default combineReducers({ card: cardReducer });
