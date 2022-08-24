import * as actions from "../actions/index";
import { ICoinData } from "./coinData";

interface GET_COIN_DATA_REQUEST {
	type: typeof actions.GET_COIN_DATA_REQUEST;
	payload: any;
};

interface GET_COIN_DATA_SUCCESS {
	type: typeof actions.GET_COIN_DATA_SUCCESS;
	payload: ICoinData;
};

interface GET_COIN_DATA_FAIL {
	type: typeof actions.GET_COIN_DATA_FAIL;
	payload: string;
};

export type CoinDataAction =
	| GET_COIN_DATA_REQUEST
	| GET_COIN_DATA_SUCCESS
	| GET_COIN_DATA_FAIL;
