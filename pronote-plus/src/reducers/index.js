import {combineReducers} from 'redux';
import pronoteReducer from './pronoteReducer';

export default combineReducers({
    pronote : pronoteReducer
})