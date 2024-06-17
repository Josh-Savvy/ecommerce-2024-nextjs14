import { Seller } from "./user.interface";

export interface Rating {
	id: string;
	value: number;
	ratedBy: string; //userId
}

export interface ProductImage {
	id: string;
	url: string;
}

export interface Category {
	id: string;
	title: string;
	imageUrl: string;
	description?: string;
	createdAt: Date;
	updatedAt: Date;
	products: Product[];
}

export default interface Product {
	id: string;
	title: string;
	description: string;
	images: ProductImage[];
	price: number;
	initialQuantity: number;
	quantityLeft: number;
	availableSizes?: string[];
	inStock: boolean;
	views: number;
	seller: Seller;
	rating: Rating[];
	percentageOff?: number;
	discoutedPrice: number;
	category: Category;
	createdAt: Date;
	updatedAt: Date;
}
