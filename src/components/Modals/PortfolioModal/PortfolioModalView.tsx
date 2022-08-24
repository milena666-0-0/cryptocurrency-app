import { memo, FC } from "react";

import { IPortfolioCoin } from "../../../types/portfolioCoin";
import { IPortfolioState } from "../../../types/portfolioState";
import { roundNumb } from "../../../utils/index.tsx";

import "./styles.scss";

interface IPortfolioModalProps {
	portfolio: IPortfolioState;
	handleCloseModal: () => void;
	handleRemoveCoinFromPorfolio: (id: string) => void;
}

export const PortfolioModalView: FC<IPortfolioModalProps> = memo(
	({ portfolio, handleCloseModal, handleRemoveCoinFromPorfolio }) => {
		const { portfolio: coins } = portfolio;

		let dataToRender: IPortfolioCoin[] = [];

		Object.values(coins).forEach(
			(coin) => (dataToRender = [...dataToRender, ...coin])
		);

		return (
			<div onClick={handleCloseModal} className="portfolio-modal">
				<div
					onClick={(e) => e.stopPropagation()}
					className="portfolio-modal__content"
				>
					<div
						onClick={handleCloseModal}
						className="portfolio-modal__close-btn"
					>
						x
					</div>
					<p className="portfolio-modal__title">Portfolio</p>
					<div className="portfolio-modal__slider">
						<div className="portfolio-modal__coins-wrapper">
							{dataToRender.length ? (
								dataToRender.map((coin) => {
									const {
										name,
										symbol,
										priceUsd,
										quantity,
										id,
									} = coin;
									return (
										<div
											className="portfolio-modal__coin"
											key={id}
										>
											<div className="portfolio-modal__coin-info">
												<span className="portfolio-modal__coin-name">
													{name}{" "}
													<span>({symbol}) </span>
												</span>
												<span className="portfolio-modal__coin-price">
													${roundNumb(priceUsd, 3)}
												</span>
											</div>
											<div className="portfolio-modal__coin-qty">
												<span>{quantity}</span>
												<span>Qty</span>
											</div>
											<button
												onClick={() =>
													handleRemoveCoinFromPorfolio(
														id
													)
												}
												className="portfolio-modal__coin-btn"
												type=""
											>
												-
											</button>
										</div>
									);
								})
							) : (
								<span
									style={{
										textAlign: "center",
										fontWeight: 600,
									}}
								>
									Portfolio is empty
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
);
