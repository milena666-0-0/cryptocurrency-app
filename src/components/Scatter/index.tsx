import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { memo, FC } from "react";
import { useSelector } from "react-redux";

import { ICoinHistory } from "../../pages/Coin/types/coinHistory";
import { ICoinState } from "../../pages/Coin/types/coinState";
import { coinSelector } from "../../pages/Coin/selectors/index.tsx";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface IScatterProps {
	data: ICoinHistory[];
}

export const LineScatter: FC<IScatterProps> = memo(({ data }) => {
	const options = {
		responsive: true,
		scales: {
			y: {
				ticks: {
					autoSkip: true,
					maxTicksLimit: 15,
				},
			},
			x: {
				ticks: {
					autoSkip: true,
					maxTicksLimit: 20,
				},
			},
		},
		plagins: {
			decimation: {
				enabled: true,
				algorithm: "lttb",
				samples: 50,
			},
		},
	};

	const { intervalFormat }: ICoinState = useSelector(coinSelector);

	const labels = data
		.splice(0, 100)
		.map(({ time }) => moment(time).format(intervalFormat));

	const datas = {
		labels,
		datasets: [
			{
				label: "price",
				data: data.splice(0, 100).map(({ priceUsd }) => priceUsd),
				color: "#ffff",
				borderColor: "rgb(17, 125, 17)",
			},
		],
	};

	return <Line options={options} data={datas} />;
});
