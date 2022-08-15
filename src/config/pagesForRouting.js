import { routeNames } from "../routes/routeNames";
import { CoinContainer } from "../pages/Coin/containers/CoinContainer";
import { CurrenciesContainer } from "../pages/Main/containers/CurrenciesContainer";

export const pagesForRouting = [
	{ routePath: routeNames.HOME, Component: CurrenciesContainer },
	{ routePath: routeNames.COIN, Component: CoinContainer },
];
