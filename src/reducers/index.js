import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const initialState = {
	portfolio: [],
	selectedCoin: {},
	initialPrice: 1000,
	currentPrice: 1000,
};

export const portfolioReducer = handleActions(
	{
		[actions.ADD_COIN_TO_PORTFOLIO]: (state, { payload }) => {
			const copy = [...state.portfolio];
			let changedCopy = [];

			const findCoinInPortfolio = state.portfolio.find(
				(coin) => coin.id === payload.id
			);

			if (findCoinInPortfolio) {
				findCoinInPortfolio.quantity += payload.quantity;
				changedCopy = [...copy];
			} else {
				changedCopy = [...copy, payload];
			}

			return {
				...state,
				portfolio: changedCopy,
			};
		},
		[actions.REMOVE_COIN_FROM_PORTFOLIO]: (state, { payload }) => {
			const copy = [...state.portfolio];

			const changedCopy = copy.filter((coin) => coin.id !== payload);

			return {
				...state,
				portfolio: changedCopy,
			};
		},
		[actions.SET_ACTIVE_COIN]: (state, { payload }) => ({
			...state,
			selectedCoin: payload,
		}),
	},
	initialState
);
