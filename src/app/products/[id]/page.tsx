import ItemNotFound from "@/components/atoms/common/item-not-found";
import ProductImageGallery from "@/components/organisms/products/view-product/product-image-gallery";
import ProductSideDetails from "@/components/organisms/products/view-product/product-side-details";
import RelatedProducts from "@/components/organisms/products/view-product/related-products";
import type Product from "@/interfaces/product.interface";
import React from "react";

type Props = { params: { id: string } };

export default async function ViewProductPage({ params: { id } }: Props) {
	const data = await fetch(`${process.env.API_BASE_URL}/products/${id}`)
		.then((res) => {
			return res.json() as unknown as Product;
		})
		.catch((err) => {
			console.log({ err });
			return err;
		});

	return data.error ? (
		<ItemNotFound name="product" />
	) : (
		<div className="min-h-[100vh] pt-10">
			<div className="grid grid-cols-12 sm:px-12 px-6 gap-3">
				<div className="xl:col-span-8 col-span-12">
					<ProductImageGallery {...data} />
				</div>
				<div className="xl:col-span-4 col-span-12">
					<ProductSideDetails />
				</div>
			</div>
			<div className=""></div>
			<RelatedProducts {...data} />
		</div>
	);
}
