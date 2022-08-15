import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const initialState = {
	data: [],
	isLoading: false,
	error: null,
};

export const currenciesReducer = handleActions(
	{
		[actions.GET_ALL_CURRENCIES_REQUEST]: (state) => ({
			...state,
			isLoading: true,
		}),
		[actions.GET_ALL_CURRENCIES_SUCCESS]: (state, { payload }) => ({
			...state,
			data: payload.data,
			isLoading: false,
		}),
		[actions.GET_ALL_CURRENCIES_FAIL]: (state, { payload }) => ({
			...state,
			isLoading: false,
			error: payload,
		}),
	},
	initialState
);
