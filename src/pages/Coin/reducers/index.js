import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const initialState = {
	data: {},
	history: {},
	isLoading: false,
	error: null,
};

export const coinReducer = handleActions(
	{
		[actions.GET_COIN_DATA_REQUEST]: (state) => ({
			...state,
			isLoading: true,
		}),
		[actions.GET_COIN_DATA_SUCCESS]: (state, { payload }) => {
            const {data, history} = payload;

			return {
				...state,
				data: data.data,
				history:  history.data,
				isLoading: false,
			};
		},
		[actions.GET_COIN_DATA_FAIL]: (state, { payload }) => ({
			...state,
			isLoading: false,
			error: payload,
		}),
	},
	initialState
);
