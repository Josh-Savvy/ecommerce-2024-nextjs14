import Product from "./product.interface";

export enum UserRole {
	User = "User",
	Seller = "Seller",
	Admin = "Admin",
	SuperAdmin = "SuperAdmin",
}

export default interface User {
	id: string;
	username: string;
	avatar: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: UserRole;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
	// orders: Order[];
}

export interface UserWithSellerProfile extends User {
	sellerProfile: Seller;
}

export interface Seller {
	userId: string;
	user: UserWithSellerProfile;
	products: Product[];
}
