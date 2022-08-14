import axios from "axios";

const BASE_URL = "https://api.coincap.io/v2/assets";

const config = {
	baseURL: BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		Pragma: "no-cache",
	},
};

const api = axios.create(config);

export default api;
