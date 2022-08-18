import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const LineScatter = ({ data }) => {
	const options = {
		responsive: true,
	};

	const labels = data
		.splice(0, 50)
		.map(({ time }) => moment(time).format("HH:mm"));

	const datas = {
		labels,
		datasets: [
			{
				label: "price",
				data: data.splice(0, 50).map(({ priceUsd }) => priceUsd),
				color: "#ffff",
				borderColor: "rgb(17, 125, 17)",
			},
		],
	};

	return <Line options={options} data={datas} />;
};
