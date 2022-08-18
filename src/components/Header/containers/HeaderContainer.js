import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useModal } from "../../../hooks/index";
import { getPopularCoins } from "../../../services/coinCap";
import { PortfolioModalView } from "../../Modals/PortfolioModal/PortfolioModalView";
import { HeaderView } from "../components/HeaderView";
import { REMOVE_COIN_FROM_PORTFOLIO } from "../../../actions";

export const HeaderContainer = () => {
	const dispatch = useDispatch();
	const { isOpen, handleChangeModalOpen, handleCloseModal } = useModal();
	const { popular } = useSelector((state) => state.currencies);
	const { portfolio } = useSelector((state) => state.portfolio);

	const handleRemoveCoinFromPorfolio = useCallback((id) => {
		dispatch(REMOVE_COIN_FROM_PORTFOLIO(id));
	}, []);

	useEffect(() => {
		dispatch(getPopularCoins());
	}, []);

	return (
		<>
			<HeaderView
				coins={popular}
				handleChangeModalOpen={handleChangeModalOpen}
			/>
			{isOpen && (
				<PortfolioModalView
					portfolio={portfolio}
					handleCloseModal={handleCloseModal}
					handleRemoveCoinFromPorfolio={handleRemoveCoinFromPorfolio}
				/>
			)}
		</>
	);
};
