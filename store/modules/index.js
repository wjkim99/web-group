import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "@reduxjs/toolkit";

import config from './config';

const reducer = (state, action) => {

	if(action.type === HYDRATE) {
		return {
			...state,
			...action.payload
		};
	}
	return combineReducers({
		config
	})(state, action);

}

export default reducer;