import { combineReducers } from 'redux';
import hobbyReducer from './hobbyReducer';

const rootReducer = combineReducers({
  hobby: hobbyReducer,
});

export default rootReducer;
