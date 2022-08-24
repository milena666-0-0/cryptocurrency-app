import { CoinHistoryAction } from "./coinHistoryAction";
import { CoinDataAction } from "./coinDataAction";
import { SET_INTERVAL_FORMAT } from "../actions/index";

interface SET_INTERVAL_FORMAT {
	type: typeof SET_INTERVAL_FORMAT;
	payload?: any;
};

export type CoinAction =
	| SET_INTERVAL_FORMAT
	| CoinDataAction
	| CoinHistoryAction;
