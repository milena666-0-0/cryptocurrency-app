import api from "../api/config";
import {
	GET_ALL_CURRENCIES_REQUEST,
	GET_ALL_CURRENCIES_SUCCESS,
	GET_ALL_CURRENCIES_FAIL,
} from "../pages/Main/actions/index";
import {
	GET_COIN_DATA_REQUEST,
	GET_COIN_DATA_FAIL,
	GET_COIN_DATA_SUCCESS,
} from "../pages/Coin/actions";

export const getCurrenciesData = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_CURRENCIES_REQUEST });
		const { data } = await api.get(`/assets?limit=10`);
		dispatch({ type: GET_ALL_CURRENCIES_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: GET_ALL_CURRENCIES_FAIL, payload: e.message });
		console.log(e);
	}
};

export const getCoinData = (coin) => async (dispatch) => {
	try {
		dispatch({ type: GET_COIN_DATA_REQUEST, payload: coin });
		const { data } = await api.get(`/assets/${coin}`);
		
		const { data: history } = await api.get(
			`/assets/${coin}/history?interval=h2`
		);

		dispatch({
			type: GET_COIN_DATA_SUCCESS,
			payload: { data, history },
		});
	} catch (e) {
		dispatch({ type: GET_COIN_DATA_FAIL, payload: e.message });
		console.log(e);
	}
};