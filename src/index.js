import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { configStore } from "./store/configureStore";

import "./styles/normolize.scss";

// const store = configStore();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<h1>Hello</h1>
	</StrictMode>
);
