import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer.tsx";

export const configStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);

	return store;
};

