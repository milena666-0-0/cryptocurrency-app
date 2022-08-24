import { IPortfolioCoin } from "./portfolioCoin.tsx";

export interface IPortfolioData {
	portfolio: { [key: string]: IPortfolioCoin[] };
};
