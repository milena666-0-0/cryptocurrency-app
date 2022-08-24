import { RootState } from "../../../store/rootReducer";

export const currenciesSelector = (state: RootState) => state.currencies;
