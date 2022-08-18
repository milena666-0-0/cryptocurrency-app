import {createAction} from "redux-actions";

export const GET_ALL_CURRENCIES_REQUEST = createAction(
	"GET_ALL_CURRENCIES_REQUEST"
);
export const GET_ALL_CURRENCIES_SUCCESS = createAction(
	"GET_ALL_CURRENCIES_SUCCESS"
);
export const GET_ALL_CURRENCIES_FAIL = createAction("GET_ALL_CURRENCIES_FAIL");

export const SET_POPULAR_CURRENCIES = createAction("SET_POPULAR_CURRENCIES");

