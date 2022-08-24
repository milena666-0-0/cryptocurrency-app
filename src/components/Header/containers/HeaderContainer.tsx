import { useEffect, useCallback, FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useModal } from "../../../hooks/index.tsx";
import { getPopularCoins } from "../../../services/coinCap.tsx";
import { PortfolioModalView } from "../../Modals/PortfolioModal/PortfolioModalView.tsx";
import { HeaderView } from "../components/HeaderView.tsx";
import { REMOVE_COIN_FROM_PORTFOLIO } from "../../../actions/index.tsx";
import { currenciesSelector } from "../../../pages/Main/selectors/index.tsx";
import { portfolioSelector } from "../../../selectors/index.tsx";
import { ICurrenciesState } from "../../../pages/Main/types/currenciesState";
import { IPortfolioState } from "../../../types/portfolioState";

export const HeaderContainer: FC = () => {
	const dispatch = useDispatch();

	const { isOpen, handleChangeModalOpen, handleCloseModal } = useModal();
	const { popular }: ICurrenciesState = useSelector(currenciesSelector);
	const portfolio: IPortfolioState = useSelector(portfolioSelector);

	const handleRemoveCoinFromPorfolio = useCallback((id: string) => {
		dispatch({ type: REMOVE_COIN_FROM_PORTFOLIO, payload: id });
	}, []);

	useEffect(() => {
		dispatch(getPopularCoins());
	}, []);

	return (
		<>
			<HeaderView
				coins={popular}
				portfolio={portfolio}
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
