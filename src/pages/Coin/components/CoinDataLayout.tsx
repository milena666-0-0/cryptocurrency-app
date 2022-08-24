import { memo, FC } from "react";

import { LineScatter } from "../../../components/Scatter/index.tsx";
import { roundNumb } from "../../../utils/index.tsx";
import { dateFormat } from "../../../config/dateFormat.tsx";
import { PlainSpinner } from "../../../components/Spinners/PlainSpinner/index.tsx";
import { ICoinState } from "../types/coinState";
import { ICoinData } from "../types/coinData";

import "./styles.scss";

interface ICoinLayoutProps {
	coinData: ICoinState;
	indexOfInterval: number;
	handleChangeModalOpen: () => void;
	handleSelectHistoryInterval: (
		coin: ICoinData,
		interval: string,
		format: string
	) => void;
	handleSetInterval: (index: number) => void;
};

export const CoinDataLayout: FC<ICoinLayoutProps> = memo(
	({
		coinData,
		indexOfInterval,
		handleSetInterval,
		handleChangeModalOpen,
		handleSelectHistoryInterval,
	}) => {
		const {
			data: {
				id,
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
			isLoading,
		} = coinData;

		return (
			<div className="coin">
				{!isLoading ? (
					<div className="container">
						<div className="coin__info">
							<span className="coin__rank">Rank №{rank}</span>
							<div className="coin__wraper">
								<button
									onClick={() => {
										handleChangeModalOpen();
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
								<span className="coin__content-name">
									Mrt Cap
								</span>
								<span>${roundNumb(marketCapUsd, 3)}</span>
							</div>
							<div className="coin__content">
								<span className="coin__content-name">
									Supply{" "}
								</span>
								<span>{roundNumb(supply, 3)}</span>
							</div>
							<div className="coin__content">
								<span className="coin__content-name">
									Volume 24hr{" "}
								</span>
								<span>${roundNumb(volumeUsd24Hr, 3)}</span>
							</div>
							<div className="coin__content">
								<span className="coin__content-name">
									Max supply{" "}
								</span>
								<span>
									{maxSupply === null
										? "-"
										: roundNumb(maxSupply, 3)}
								</span>
							</div>
							<div className="coin__content">
								<span className="coin__content-name">
									Vwap{" "}
								</span>
								<span>{roundNumb(vwap24Hr, 3)}</span>
							</div>
						</div>
						<div className="coin__intervals">
							{Object.keys(dateFormat).map((format, index) => (
								<div
									key={id}
									onClick={() => {
										if (indexOfInterval === index) return;
										handleSetInterval(index);
										handleSelectHistoryInterval(
											id,
											format,
											dateFormat[format]
										);
									}}
									className={
										indexOfInterval === index
											? "coin__interval--active"
											: "coin__interval"
									}
								>
									{format}
								</div>
							))}
						</div>
						<div
							style={{
								background: "#ffff",
								borderRadius: "5px",
							}}
						>
							{history && <LineScatter data={history} />}
						</div>
					</div>
				) : (
					<PlainSpinner />
				)}
			</div>
		);
	}
);
