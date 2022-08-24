import { ICoinData } from "../pages/Coin/types/coinData";
import { IPortfolioCoin } from "./portfolioCoin.tsx";

export interface IPortfolioState {
	portfolio: { [key: string]: IPortfolioCoin[] };
	currentCoinsData: ICoinData[];
	selectedCoin: ICoinData | {};
	initialPrice: number;
	difInUsd: number;
	difInPercent: number;
}
