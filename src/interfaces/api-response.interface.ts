import Product from "./product.interface";

export interface GetProductsResponse {
	page: number;
	count: number;
	data: Product[];
}

export interface ApiErrorInterface {
	error: { message: string; errorCode: string; status: number };
}
