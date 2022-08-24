import { routeNames } from "../routes/routeNames.tsx";
import { CoinContainer } from "../pages/Coin/containers/CoinContainer.tsx";
import { CurrenciesContainer } from "../pages/Main/containers/CurrenciesContainer.tsx";

export const pagesForRouting = [
	{ routePath: routeNames.HOME, Component: CurrenciesContainer },
	{ routePath: routeNames.COIN, Component: CoinContainer },
];
