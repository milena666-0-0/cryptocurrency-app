import { LineScatter } from "../../../components/Scatter/index";
import { roundNumb } from "../../../utils/index";

import "./styles.scss";

export const CoinDataLayout = ({
	coinData,
	handleChangeModalOpen,
	handleSelectCoin,
}) => {
	const {
		data: {
			changePercent24Hr,
			marketCapUsd,
			maxSupply,
			name,
			priceUsd,
			symbol,
			supply,
			rank,
			volumeUsd24Hr,
			vwap24Hr,
		},
		history,
	} = coinData;

	return (
		<div className="coin">
			<div className="container">
				<div className="coin__info">
					<span className="coin__rank">Rank №{rank}</span>
					<div className="coin__wraper">
						<button
							onClick={() => {
								handleChangeModalOpen();
								handleSelectCoin(coinData);
							}}
							className="coin__btn"
							type=""
						>
							+
						</button>
						<span className="coin__name">
							{name} ({symbol})
						</span>
						<div
							className={
								changePercent24Hr > 0
									? "coin__percent--pos"
									: "coin__percent--neg"
							}
						>
							<div className="arrow"></div>
							{roundNumb(changePercent24Hr, 2, true)}%
						</div>
					</div>
					<span className="coin__price">
						${roundNumb(priceUsd, 3)}
					</span>
				</div>
				<div className="coin__wraper">
					<div className="coin__content">
						<span className="coin__content-name">Mrt Cap</span>
						<span>${roundNumb(marketCapUsd, 3)}</span>
					</div>
					<div className="coin__content">
						<span className="coin__content-name">Supply </span>
						<span>{roundNumb(supply, 3)}</span>
					</div>
					<div className="coin__content">
						<span className="coin__content-name">Volume 24hr </span>
						<span>${roundNumb(volumeUsd24Hr, 3)}</span>
					</div>
					<div className="coin__content">
						<span className="coin__content-name">Max supply </span>
						<span>
							{maxSupply === null ? "-" : roundNumb(maxSupply, 3)}
						</span>
					</div>
					<div className="coin__content">
						<span className="coin__content-name">Vwap </span>
						<span>{roundNumb(vwap24Hr, 3)}</span>
					</div>
				</div>
				<div style={{ background: "#ffff", borderRadius: "5px" }}>
					<LineScatter data={history} />
				</div>
			</div>
		</div>
	);
};
