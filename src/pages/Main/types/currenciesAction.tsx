import { ICoinData } from "../../Coin/types/coinData";
import * as actions from "../actions/index";

interface GET_ALL_CURRENCIES_REQUEST {
	type: typeof actions.GET_ALL_CURRENCIES_REQUEST;
	payload?: any;
};

interface GET_ALL_CURRENCIES_SUCCESS {
	type: typeof actions.GET_ALL_CURRENCIES_SUCCESS;
	payload: { data: ICoinData[] };
};

interface GET_ALL_CURRENCIES_FAIL {
	type: typeof actions.GET_ALL_CURRENCIES_FAIL;
	payload: string;
};

interface SET_POPULAR_CURRENCIES {
	type: typeof actions.SET_POPULAR_CURRENCIES;
	payload?: any;
};

export type CurrenciesAction =
	| GET_ALL_CURRENCIES_REQUEST
	| GET_ALL_CURRENCIES_SUCCESS
	| GET_ALL_CURRENCIES_FAIL
	| SET_POPULAR_CURRENCIES;
