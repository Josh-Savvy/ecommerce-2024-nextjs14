import axiosInstance from "./axiosInstance";

const getProducts = async (limit = 10, skip = 0) => {
	try {
		const { data } = await axiosInstance.get("/api/products");
		console.log({ data });
	} catch (error) {
		console.log({ error });
	}
};
