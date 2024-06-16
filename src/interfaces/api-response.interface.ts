import Product from "./product.interface";

export interface GetProductsResponse {
	page: number;
	count: number;
	data: Product[];
}
