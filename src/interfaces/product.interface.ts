export interface ProductImage {
	id: string;
	url: string;
}

export default interface Product {
	id: string;
	title: string;
	description: string;
	images: ProductImage[];
	price: number;
	quantity: number;
	percentageOff?: number;
	discoutedPrice: number;
	createdAt: Date;
	updatedAt: Date;
}
