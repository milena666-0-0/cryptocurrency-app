import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CoinDataLayout } from "../components/CoinDataLayout";
import { getCoinData } from "../../../services/coinCap";

export const CoinContainer = () => {
	const dispatch = useDispatch();
	const coinData = useSelector((state) => state.coin);

	useEffect(() => {
		dispatch(getCoinData("bitcoin"));
	}, []);

	return <CoinDataLayout coinData={coinData} />;
};
