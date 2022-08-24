import { memo, FC } from "react";
import { Link } from "react-router-dom";

import { PlainSpinner } from "../../../components/Spinners/PlainSpinner/index.tsx";
import { roundNumb } from "../../../utils/index.tsx";
import { routeNames } from "../../../routes/routeNames.tsx";
import { ICoinData } from "../../Coin/types/coinData";

import "./styles.scss";

interface ICurrenciesLayoutProps {
	data: ICoinData[];
	isLoading: boolean;
	handleChangeModalOpen: () => void;
	handleSelectCoin: (coin: ICoinData) => void;
}

export const CurrenciesLayout: FC<ICurrenciesLayoutProps> = memo(
	({ data, isLoading, handleChangeModalOpen, handleSelectCoin }) => {
		return (
			<main className="main">
				<div className="wraper">
					{!isLoading ? (
						<table className="coins-table">
							<thead>
								<tr className="coins-table__header">
									<th className="coins-table__name">Rank</th>
									<th className="coins-table__name">Name</th>
									<th className="coins-table__name">
										Symbol
									</th>
									<th className="coins-table__name">Price</th>
									<th className="coins-table__name">
										Mrt Cap
									</th>
									<th className="coins-table__name">
										Volume 24hr
									</th>
									<th className="coins-table__name">
										{"&nbsp"}
									</th>
								</tr>
							</thead>
							<tbody>
								{data.length &&
									data.map((currency) => {
										const {
											rank,
											id,
											name,
											symbol,
											volumeUsd24Hr,
											priceUsd,
											marketCapUsd,
										} = currency;
										return (
											<tr
												className="coins-table__body"
												key={id}
											>
												<td className="coins-table__content">
													{rank}
												</td>

												<td className="coins-table__content">
													<Link
														className="coins-table__link"
														to={`${routeNames.COINS}/${id}`}
													>
														{name}
													</Link>
												</td>

												<td className="coins-table__content">
													{symbol}
												</td>
												<td className="coins-table__content">
													${roundNumb(priceUsd, 3)}
												</td>
												<td className="coins-table__content">
													$
													{roundNumb(marketCapUsd, 3)}
												</td>
												<td className="coins-table__content">
													$
													{roundNumb(
														volumeUsd24Hr,
														3
													)}
												</td>
												<td className="coins-table__content">
													<button
														onClick={() => {
															handleChangeModalOpen();
															handleSelectCoin(
																currency
															);
														}}
														className="coins-table__btn"
														type=""
													>
														+
													</button>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					) : (
						<PlainSpinner />
					)}
				</div>
			</main>
		);
	}
);
