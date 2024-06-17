import ItemNotFound from "@/components/atoms/common/item-not-found";
import MaxWidthContainer from "@/components/layout/_components/max-width-container";
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
		<MaxWidthContainer className="min-h-[100vh] py-10">
			<div className="grid grid-cols-12 gap-4">
				<div className="xl:col-span-9 col-span-12">
					<ProductImageGallery {...data} />
				</div>
				<div className="xl:col-span-3 col-span-12 xl:col-start-auto col-start-3">
					<ProductSideDetails {...data} />
				</div>
			</div>
			<div className=""></div>
			<RelatedProducts {...data} />
		</MaxWidthContainer>
	);
}
