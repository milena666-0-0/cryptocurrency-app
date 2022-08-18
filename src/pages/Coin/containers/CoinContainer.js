import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CoinDataLayout } from "../components/CoinDataLayout";
import { CoinModalView } from "../../../components/Modals/CoinModal/CoinModalView";
import { getCoinData } from "../../../services/coinCap";
import { useModal } from "../../../hooks/index";
import { ADD_COIN_TO_PORTFOLIO, SET_ACTIVE_COIN } from "../../../actions/index";

export const CoinContainer = () => {
	const dispatch = useDispatch();
	const coinData = useSelector((state) => state.coin);
	// const { selectedCoin } = useSelector((state) => state.portfolio);
	const { isOpen, value, handleChangeModalOpen, handleCloseModal, onChange } =
		useModal();
	const { id } = useParams();

	const handleAddCoinToPortfolio = useCallback((coin) => {
		dispatch(ADD_COIN_TO_PORTFOLIO(coin));
	}, []);

	const handleSelectCoin = useCallback((coin) => {
		dispatch(SET_ACTIVE_COIN(coin));
	}, []);

	useEffect(() => {
		dispatch(getCoinData(id));
	}, []);

	return (
		<>
			<CoinDataLayout
				coinData={coinData}
				handleSelectCoin={handleSelectCoin}
				handleChangeModalOpen={handleChangeModalOpen}
			/>
			{isOpen && (
				<CoinModalView
					value={value}
					coinData={coinData.data}
					handleCloseModal={handleCloseModal}
					handleAddCoinToPortfolio={handleAddCoinToPortfolio}
					onChange={onChange}
				/>
			)}
		</>
	);
};
