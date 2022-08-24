import { IPortfolioCoin } from "./portfolioCoin";
import { ICoinData } from "../pages/Coin/types/coinData";
import * as actions from "../actions/index";

interface ADD_COIN_TO_PORTFOLIO {
	type: typeof actions.ADD_COIN_TO_PORTFOLIO;
	payload: IPortfolioCoin;
};

interface REMOVE_COIN_FROM_PORTFOLIO {
	type: typeof actions.REMOVE_COIN_FROM_PORTFOLIO;
	payload: string;
};

interface SET_ACTIVE_COIN {
	type: typeof actions.SET_ACTIVE_COIN;
	payload: ICoinData;
};

interface UPDATE_COINS_DATA {
	type: typeof actions.UPDATE_COINS_DATA;
	payload: ICoinData[];
};

interface UPDATE_PORTFOLIO {
	type: typeof actions.UPDATE_PORTFOLIO;
	payload?: any;
};

export type PortfolioAction =
	| ADD_COIN_TO_PORTFOLIO
	| REMOVE_COIN_FROM_PORTFOLIO
	| SET_ACTIVE_COIN
	| UPDATE_COINS_DATA
	| UPDATE_PORTFOLIO;
