import { ICurrenciesState } from "../types/currenciesState";
import { CurrenciesAction } from "../types/currenciesAction";
import * as actions from "../actions/index.tsx";

const initialState: ICurrenciesState = {
	data: [],
	popular: [],
	isLoading: false,
	error: null,
};

export const currenciesReducer = (
	state = initialState,
	action: CurrenciesAction
): ICurrenciesState => {
	switch (action.type) {
		case actions.GET_ALL_CURRENCIES_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.GET_ALL_CURRENCIES_SUCCESS:
			return {
				...state,
				data: action.payload.data,
				isLoading: false,
			};
		case actions.GET_ALL_CURRENCIES_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case actions.SET_POPULAR_CURRENCIES:
			return {
				...state,
				popular: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
