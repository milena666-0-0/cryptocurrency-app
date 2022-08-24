import { ThunkAction } from "redux-thunk";

import api from "../api/config.tsx";
import { RootState } from "../store/rootReducer.tsx";
import { CurrenciesAction } from "../pages/Main/types/currenciesAction";
import { PortfolioAction } from "../types/portfolioAction";
import { CoinAction } from "../pages/Coin/types/coinAction";
import { ICoinData } from "../pages/Coin/types/coinData";
import * as currenciesActions from "../pages/Main/actions/index.tsx";
import * as coinActions from "../pages/Coin/actions/index.tsx";
import { UPDATE_COINS_DATA, UPDATE_PORTFOLIO } from "../actions/index.tsx";

export const getCurrenciesData =
	(
		offset = 0
	): ThunkAction<void, RootState, null, CurrenciesAction | PortfolioAction> =>
	async (dispatch) => {
		try {
			dispatch({ type: currenciesActions.GET_ALL_CURRENCIES_REQUEST });
			const { data } = await api.get(`/assets?limit=10&offset=${offset}`);
			dispatch({
				type: currenciesActions.GET_ALL_CURRENCIES_SUCCESS,
				payload: data,
			});
			dispatch({ type: UPDATE_COINS_DATA, payload: data });
			dispatch({ type: UPDATE_PORTFOLIO });
		} catch (e) {
			dispatch({
				type: currenciesActions.GET_ALL_CURRENCIES_FAIL,
				payload: e.message,
			});
			console.log(e);
		}
	};

export const getCoinData =
	(
		coin: ICoinData,
		interval = "m1"
	): ThunkAction<void, RootState, null, CoinAction> =>
	async (dispatch) => {
		try {
			dispatch({ type: coinActions.GET_COIN_DATA_REQUEST });
			const {
				data: { data: data },
			} = await api.get(`/assets/${coin}`);

			const {
				data: { data: history },
			} = await api.get(`/assets/${coin}/history?interval=${interval}`);

			dispatch({
				type: coinActions.GET_COIN_DATA_SUCCESS,
				payload: { data, history },
			});
		} catch (e) {
			dispatch({
				type: coinActions.GET_COIN_DATA_FAIL,
				payload: e.message,
			});
			console.log(e);
		}
	};

export const getCoinHistory =
	(
		coin: ICoinData,
		interval: string
	): ThunkAction<void, RootState, null, CoinAction> =>
	async (dispatch) => {
		try {
			dispatch({ type: coinActions.GET_COIN_HISTORY_REQUEST });

			const {
				data: { data: history },
			} = await api.get(`/assets/${coin}/history?interval=${interval}`);

			dispatch({
				type: coinActions.GET_COIN_HISTORY_SUCCESS,
				payload: history,
			});
		} catch (e) {
			dispatch({
				type: coinActions.GET_COIN_HISTORY_FAIL,
				payload: e.message,
			});
			console.log(e);
		}
	};

export const getPopularCoins =
	(): ThunkAction<void, RootState, null, CurrenciesAction> =>
	async (dispatch) => {
		try {
			const {
				data: { data },
			} = await api.get(`/assets?limit=3`);
			dispatch({
				type: currenciesActions.SET_POPULAR_CURRENCIES,
				payload: data,
			});
		} catch (e) {
			console.log(e);
		}
	};
