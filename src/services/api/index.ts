import type Product from "@/interfaces/product.interface";
import type { Category } from "@/interfaces/product.interface";
import axios from "axios";

const getProducts = async (args?: any): Promise<Product[]> => {
	const [_key, { limit = 10, skip = 0 }] = args || {};
	try {
		let url = `/api/products`;
		if (limit) url = `/api/products?limit=${limit}`;
		if (skip) url = `/api/products?skip=${skip}`;
		else if (limit && skip) url = `/api/products?limit=${limit}&skip=${skip}`;
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const getProductById = async (id: string): Promise<Product> => {
	try {
		const { data } = await axios.get(`/api/products/${id}`);
		return data;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const fetchCategories = async (args?: any): Promise<Category[]> => {
	const [_key, { limit = 10, skip = 0 }] = args || {};
	try {
		let url = `/api/categories`;
		if (limit) url = `/api/categories?limit=${limit}`;
		if (skip) url = `/api/categories?skip=${skip}`;
		else if (limit && skip) url = `/api/categories?limit=${limit}&skip=${skip}`;
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const fetchSingleCategory = async (id: string): Promise<Category> => {
	try {
		const { data } = await axios.get(`/api/categories/${id}`);
		return data;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const API = { getProducts, fetchCategories, fetchSingleCategory, getProductById };

export default API;
