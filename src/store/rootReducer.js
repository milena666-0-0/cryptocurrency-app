import { combineReducers } from "redux";

import { currenciesReducer } from "../pages/Main/reducers";
import { coinReducer } from "../pages/Coin/reducers/index";

const rootReducer = combineReducers({
	currencies: currenciesReducer,
	coin: coinReducer,
});

export default rootReducer;
