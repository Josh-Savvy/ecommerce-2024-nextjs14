import axios from "axios";

const getProducts = async (limit = 10, skip = 0) => {
	try {
		const { data } = await axios.get("/api/products");
		return data;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const API = { getProducts };

export default API;
