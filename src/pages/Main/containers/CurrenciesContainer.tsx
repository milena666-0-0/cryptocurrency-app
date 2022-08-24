import { useEffect, useState, useCallback, FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useModal } from "../../../hooks/index.tsx";
import {
	getCurrenciesData,
	getPopularCoins,
} from "../../../services/coinCap.tsx";
import { CurrenciesLayout } from "../components/CurrenciesLayout.tsx";
import { CoinModalView } from "../../../components/Modals/CoinModal/CoinModalView.tsx";
import { Pagination } from "../../../components/Pagination/index.tsx";
import {
	ADD_COIN_TO_PORTFOLIO,
	SET_ACTIVE_COIN,
} from "../../../actions/index.tsx";
import { currenciesSelector } from "../selectors/index.tsx";
import { portfolioSelector } from "../../../selectors/index.tsx";
import { ICurrenciesState } from "../types/currenciesState";
import { IPortfolioState } from "../../../types/portfolioState";
import { IPortfolioCoin } from "../../../types/portfolioCoin";
import { ICoinData } from "../../Coin/types/coinData";

export const CurrenciesContainer: FC = () => {
	const dispatch = useDispatch();

	const { data, isLoading }: ICurrenciesState =
		useSelector(currenciesSelector);
	const { selectedCoin }: IPortfolioState = useSelector(portfolioSelector);
	const currentOffset: number =
		+localStorage.getItem("paginationOffset") || 0;
	const { isOpen, value, handleChangeModalOpen, handleCloseModal, onChange } =
		useModal();

	const [offset, setOffset] = useState<number>(currentOffset);

	const handleIncPageQuantity = useCallback(() => {
		setOffset((offset) => offset + 10);
	}, []);

	const handleDecPageQuantity = useCallback(() => {
		setOffset((offset) => offset - 10);
	}, []);

	const handleAddCoinToPortfolio = useCallback((coin: IPortfolioCoin) => {
		dispatch({ type: ADD_COIN_TO_PORTFOLIO, payload: coin });
	}, []);

	const handleSelectCoin = useCallback((coin: ICoinData) => {
		dispatch({ type: SET_ACTIVE_COIN, payload: coin });
	}, []);

	const getCurrentCoinsData = () => {
		dispatch(getPopularCoins());
		dispatch(getCurrenciesData(offset));
	};

	useEffect(() => {
		dispatch(getCurrenciesData(offset));
	}, [offset]);

	useEffect(() => {
		const intervalID = setInterval(getCurrentCoinsData, 10000);

		return () => {
			clearInterval(intervalID);
			localStorage.setItem("paginationOffset", offset);
		};
	}, [offset]);

	return (
		<div className="container">
			<CurrenciesLayout
				data={data}
				isLoading={isLoading}
				handleChangeModalOpen={handleChangeModalOpen}
				handleSelectCoin={handleSelectCoin}
			/>
			<Pagination
				offset={offset}
				handleIncPageQuantity={handleIncPageQuantity}
				handleDecPageQuantity={handleDecPageQuantity}
			/>
			{isOpen && (
				<CoinModalView
					value={value}
					coinData={selectedCoin}
					onChange={onChange}
					handleAddCoinToPortfolio={handleAddCoinToPortfolio}
					handleCloseModal={handleCloseModal}
				/>
			)}
		</div>
	);
};
