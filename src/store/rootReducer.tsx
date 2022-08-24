import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import { currenciesReducer } from "../pages/Main/reducers/index.tsx";
import { coinReducer } from "../pages/Coin/reducers/index.tsx";
import { portfolioReducer } from "../reducers/index.tsx";

const authBlackListedFields = createBlacklistFilter("portfolio", [
	"selectedCoin",
	"currentCoinsData",
]);

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["portfolio"],
	transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
	currencies: currenciesReducer,
	coin: coinReducer,
	portfolio: portfolioReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
