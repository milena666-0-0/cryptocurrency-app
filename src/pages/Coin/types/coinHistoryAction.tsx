import * as actions from "../actions/index";
import { ICoinHistory } from "./coinHistory";

interface GET_COIN_HISTORY_REQUEST {
	type: typeof actions.GET_COIN_HISTORY_REQUEST;
	payload: any;
}

interface GET_COIN_HISTORY_SUCCESS {
	type: typeof actions.GET_COIN_HISTORY_SUCCESS;
	payload: ICoinHistory;
}

interface GET_COIN_HISTORY_FAIL {
	type: typeof actions.GET_COIN_HISTORY_FAIL;
	payload: string;
}

export type CoinHistoryAction =
	| GET_COIN_HISTORY_REQUEST
	| GET_COIN_HISTORY_SUCCESS
	| GET_COIN_HISTORY_FAIL;
