import { createAction } from "redux-actions";

export const ADD_COIN_TO_PORTFOLIO = createAction("ADD_COIN_TO_PORTFOLIO");
export const REMOVE_COIN_FROM_PORTFOLIO = createAction(
	"REMOVE_COIN_FROM_PORTFOLIO"
);
export const SET_ACTIVE_COIN = createAction("SET_ACTIVE_COIN");
