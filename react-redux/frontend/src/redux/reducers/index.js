// Root Reducer
// import React, { useReducer, } from 'react';
import hobbyReducer from "./hobby";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    hobby: hobbyReducer,
});

export default rootReducer;