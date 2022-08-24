import { CoinAction } from "../types/coinAction";
import { ICoinState } from "../types/coinState";
import * as actions from "../actions/index.tsx";

const initialState: ICoinState = {
	data: {},
	history: [],
	intervalFormat: "HH:mm",
	isLoading: false,
	error: null,
};

export const coinReducer = (
	state = initialState,
	action: CoinAction
): ICoinState => {
	switch (action.type) {
		case actions.GET_COIN_DATA_REQUEST || actions.GET_COIN_HISTORY_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.GET_COIN_DATA_SUCCESS: {
			const { data, history } = action.payload;

			return {
				...state,
				data: data,
				history: history,
				isLoading: false,
			};
		}
		case actions.GET_COIN_HISTORY_SUCCESS:
			return {
				...state,
				history: action.payload,
				isLoading: false,
			};
		case actions.GET_COIN_DATA_FAIL || actions.GET_COIN_HISTORY_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case actions.SET_INTERVAL_FORMAT:
			return {
				...state,
				intervalFormat: action.payload,
			};
		default:
			return state;
	}
};
