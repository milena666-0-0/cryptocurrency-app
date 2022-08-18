import { combineReducers } from "redux";

import { currenciesReducer } from "../pages/Main/reducers";
import { coinReducer } from "../pages/Coin/reducers/index";
import { portfolioReducer } from "../reducers/index";

const rootReducer = combineReducers({
	currencies: currenciesReducer,
	coin: coinReducer,
	portfolio: portfolioReducer,
});

export default rootReducer;
