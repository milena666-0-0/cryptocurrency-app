import { useState, useEffect, useCallback, FC } from "react";
import { useParams, Params } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CoinDataLayout } from "../components/CoinDataLayout.tsx";
import { CoinModalView } from "../../../components/Modals/CoinModal/CoinModalView.tsx";
import { getCoinData, getCoinHistory } from "../../../services/coinCap.tsx";
import { useModal } from "../../../hooks/index.tsx";
import { ADD_COIN_TO_PORTFOLIO } from "../../../actions/index.tsx";
import { SET_INTERVAL_FORMAT } from "../actions/index.tsx";
import { coinSelector } from "../selectors/index.tsx";
import { ICoinState } from "../types/coinState";
import { ICoinData } from "../types/coinData";

export const CoinContainer: FC = () => {
	const dispatch = useDispatch();

	const [indexOfInterval, setIndexOfInterval] = useState<number>(0);

	const coinData: ICoinState = useSelector(coinSelector);
	const { isOpen, value, handleChangeModalOpen, handleCloseModal, onChange } =
		useModal();
	const { id }: Params<string> = useParams();

	const handleAddCoinToPortfolio = useCallback((coin: ICoinData) => {
		dispatch({ type: ADD_COIN_TO_PORTFOLIO, payload: coin });
	}, []);

	const handleSelectHistoryInterval = useCallback(
		(coin: ICoinData, interval: string, format: string) => {
			dispatch(getCoinHistory(coin, interval));
			dispatch({ type: SET_INTERVAL_FORMAT, payload: format });
		},
		[]
	);

	const handleSetInterval = useCallback((index: number) => {
		setIndexOfInterval(index);
	}, []);

	useEffect(() => {
		dispatch(getCoinData(id));

		const intervalID = setInterval(() => {
			dispatch(getCoinData(id));
		}, 10000);

		return () => {
			clearInterval(intervalID);
		};
	}, []);

	return (
		<>
			<CoinDataLayout
				coinData={coinData}
				indexOfInterval={indexOfInterval}
				handleSelectHistoryInterval={handleSelectHistoryInterval}
				handleSetInterval={handleSetInterval}
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
