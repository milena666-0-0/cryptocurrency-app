import { ICoinData } from "./coinData.tsx";
import { ICoinHistory } from "./coinHistory.tsx";

export interface ICoinState {
	data: ICoinData;
	history: ICoinHistory[];
	intervalFormat: string;
	isLoading: boolean;
	error: string | null;
}
