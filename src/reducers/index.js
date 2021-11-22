import { combineReducers } from 'redux';

// child reducer
import contactReducer from './contactReducer';

export default combineReducers({
    contact: contactReducer,
})