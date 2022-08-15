import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { CurrenciesContainer } from "./pages/Main/containers/CurrenciesContainer";
import { CoinContainer } from "./pages/Coin/containers/CoinContainer";
import { configStore } from "./store/configureStore";
import { Router } from "./routes/router";

import "./styles/normolize.scss";

const store = configStore();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Router>
					<CurrenciesContainer />
					<CoinContainer />
				</Router>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
