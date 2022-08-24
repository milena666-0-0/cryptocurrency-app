import { ICoinData } from "../../Coin/types/coinData";

export interface ICurrenciesState {
	data: ICoinData[];
	popular: ICoinData[];
	isLoading: boolean;
	error: string | null;
};
