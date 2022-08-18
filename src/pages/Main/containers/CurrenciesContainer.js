import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useModal } from "../../../hooks/index";
import { getCurrenciesData } from "../../../services/coinCap";
import { CurrenciesLayout } from "../components/CurrenciesLayout";
import { CoinModalView } from "../../../components/Modals/CoinModal/CoinModalView";
import { Pagination } from "../../../components/Pagination/index";
import { ADD_COIN_TO_PORTFOLIO, SET_ACTIVE_COIN } from "../../../actions";

export const CurrenciesContainer = () => {
	const dispatch = useDispatch();
	const { data } = useSelector((state) => state.currencies);
	const { selectedCoin } = useSelector((state) => state.portfolio);
	const currentOffset = +localStorage.getItem("paginationOffset") || 0;
	const { isOpen, value, handleChangeModalOpen, handleCloseModal, onChange } =
		useModal();

	const [offset, setOffset] = useState(currentOffset);

	const handleIncPageQuantity = useCallback(() => {
		setOffset((offset) => offset + 10);
	}, []);

	const handleDecPageQuantity = useCallback(() => {
		setOffset((offset) => offset - 10);
	}, []);

	const handleAddCoinToPortfolio = useCallback((coin) => {
		dispatch(ADD_COIN_TO_PORTFOLIO(coin));
	}, []);


	const handleSelectCoin = useCallback((coin) => {
		dispatch(SET_ACTIVE_COIN(coin));
	}, []);

	useEffect(() => {
		dispatch(getCurrenciesData(offset));
	}, [offset]);

	useEffect(() => {
		return () => {
			localStorage.setItem("paginationOffset", offset);
		};
	}, [offset]);

	return (
		<div className="container">
			<CurrenciesLayout
				data={data}
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
