import { memo, FC } from "react";

import { ICoinData } from "../../../pages/Coin/types/coinData";
import { IPortfolioState } from "../../../types/portfolioState";
import { roundNumb } from "../../../utils/index.tsx";

import "./styles.scss";

interface IHeaderViewProps {
	coins: ICoinData[];
	portfolio: IPortfolioState;
	handleChangeModalOpen: () => void;
}

export const HeaderView: FC<IHeaderViewProps> = memo(
	({ coins, portfolio, handleChangeModalOpen }) => {
		const { initialPrice, difInUsd, difInPercent } = portfolio;

		return (
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="header__info">
							{coins.length &&
								coins.map(
									({
										id,
										name,
										priceUsd,
										changePercent24Hr,
										symbol,
									}) => (
										<div
											key={id}
											className="header__wraper"
										>
											<div className="header__coin-info">
												<span className="header__coin-name">
													{name} ({symbol})
												</span>
												<span>
													${roundNumb(priceUsd, 3)}
												</span>
											</div>
											<div
												className={
													changePercent24Hr >= 0
														? "header__percent--pos"
														: "header__percent--neg"
												}
											>
												{roundNumb(
													changePercent24Hr,
													2,
													true
												)}
												%
											</div>
										</div>
									)
								)}
						</div>
						<div className="header__portfolio">
							<span
								onClick={handleChangeModalOpen}
								className="header__portfolio-value"
							>
								$
								{initialPrice > 0
									? roundNumb(initialPrice, 2)
									: 0}
							</span>
							<span
								onClick={handleChangeModalOpen}
								className="header__portfolio-dif"
							>
								{" "}
								+ {roundNumb(difInUsd, 2)}
							</span>
							<span
								onClick={handleChangeModalOpen}
								className="header__portfolio-percent"
							>
								{" "}
								({roundNumb(difInPercent, 2)}%){" "}
							</span>
							<span
								onClick={handleChangeModalOpen}
								className="header__portfolio-text"
							>
								Portfolio
							</span>
						</div>
					</div>
				</div>
			</header>
		);
	}
);
