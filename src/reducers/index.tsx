import { IPortfolioState } from "../types/portfolioState";
import { PortfolioAction } from "../types/portfolioAction";
import * as actions from "../actions/index.tsx";

const initialState: IPortfolioState = {
	portfolio: {},
	currentCoinsData: [],
	selectedCoin: {},
	initialPrice: 0,
	difInUsd: 0,
	difInPercent: 0,
};

export const portfolioReducer = (
	state = initialState,
	action: PortfolioAction
): IPortfolioState => {
	switch (action.type) {
		case actions.ADD_COIN_TO_PORTFOLIO: {
			const copy = { ...state.portfolio };
			const { payload } = action;

			const keys = Object.keys(copy);

			if (keys.length) {
				for (let i = 0; i < keys.length; i++) {
					if (payload.id === keys[i]) {
						const changedPayload = {
							...payload,
							id: payload.id + (copy[keys[i]].length + 1),
						};

						copy[keys[i]] = [...copy[keys[i]], changedPayload];
					} else if (
						payload.id !== keys[i] &&
						keys.includes(payload.id)
					) {
						continue;
					} else {
						const changedPayload = {
							...payload,
							id: payload.id + 1,
						};

						copy[payload.id] = [];
						copy[payload.id].push(changedPayload);
					}
				}
			} else {
				const changedPayload = {
					...payload,
					id: payload.id + 1,
				};

				copy[payload.id] = [];
				copy[payload.id].push(changedPayload);
			}

			const initialCoinPrice = +payload.priceUsd * payload.quantity;

			return {
				...state,
				portfolio: copy,
				initialPrice: state.initialPrice + initialCoinPrice,
			};
		}

		case actions.REMOVE_COIN_FROM_PORTFOLIO: {
			const portfolioCopy = { ...state.portfolio };

			const initialId = action.payload.split(/\d+/)[0];

			const coinToRemove = portfolioCopy[initialId].find(
				(coin) => coin.id === action.payload
			);

			const initialPrice = +coinToRemove.priceUsd * coinToRemove.quantity;

			const changedCopy = portfolioCopy[initialId].filter(
				(coin) => coin.id !== action.payload
			);

			portfolioCopy[initialId] = [...changedCopy];

			return {
				...state,
				portfolio: portfolioCopy,
				initialPrice: state.initialPrice - initialPrice,
			};
		}

		case actions.UPDATE_COINS_DATA: {
			return {
				...state,
				currentCoinsData: action.payload,
			};
		}
		case actions.UPDATE_PORTFOLIO: {
			const copiedPortfolio = { ...state.portfolio };
			const objectKeys = Object.keys(copiedPortfolio);

			let difInUsd = 0;
			let difInPercent = 0;

			state.currentCoinsData &&
				state.currentCoinsData.forEach((coin) => {
					if (objectKeys.includes(coin.id)) {
						copiedPortfolio[coin.id].forEach((item) => {
							difInUsd += coin.priceUsd - item.priceUsd;

							difInPercent +=
								(coin.priceUsd * 100) / item.priceUsd - 100;
						});
					}
				});

			return {
				...state,
				difInUsd,
				difInPercent,
			};
		}
		case actions.SET_ACTIVE_COIN: {
			return {
				...state,
				selectedCoin: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
