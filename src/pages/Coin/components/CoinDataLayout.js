export const CoinDataLayout = ({ coinData }) => {
	const {
		data: changePercent24Hr,
		marketCapUsd,
		maxSupply,
		name,
		priceUsd,
		symbol,
		supply,
		rank,
		volumeUsd24Hr,
		vwap24Hr,
	} = coinData;

	return (
		<div className="coin">
			<div className="container">
				<div className="coin__name">Bitcoin</div>
				<div>
					<div>Bitcon (BTC)</div>
					<div>4444$</div>
				</div>
				<div>
					<div>dfdfdf</div>
					<div>dfdfdf</div>
					<div>dfdfdf</div>
					<div>dfdfdf</div>
				</div>
			</div>
		</div>
	);
};
