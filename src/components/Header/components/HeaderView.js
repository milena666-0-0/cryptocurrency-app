import { roundNumb } from "../../../utils/index";

import "./styles.scss";

export const HeaderView = ({ coins, handleChangeModalOpen }) => {
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
									<div key={id} className="header__wraper">
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
							134,32 USD
						</span>
						<span
							onClick={handleChangeModalOpen}
							className="header__portfolio-dif"
						>
							{" "}
							+ 2,38
						</span>
						<span
							onClick={handleChangeModalOpen}
							className="header__portfolio-percent"
						>
							{" "}
							(1,80 %){" "}
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
};
