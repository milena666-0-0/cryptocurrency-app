import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import { HeaderContainer } from "./components/Header/containers/HeaderContainer.tsx";
import { CurrenciesContainer } from "./pages/Main/containers/CurrenciesContainer.tsx";
import { CoinContainer } from "./pages/Coin/containers/CoinContainer.tsx";
import { configStore } from "./store/configureStore.tsx";
import { Router } from "./routes/router.tsx";

import "./styles/normolize.scss";

const store = configStore();
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<HeaderContainer />
				<Router>
					<CurrenciesContainer />
					<CoinContainer />
				</Router>
			</BrowserRouter>
		</PersistGate>
	</Provider>
);
