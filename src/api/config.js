import axios from "axios";

const BASE_URL = "https://api.coincap.io/v2/";

const config = {
	baseURL: BASE_URL,
};

const api = axios.create(config);

export default api;
