import type Product from "@/interfaces/product.interface";
import type { Rating } from "@/interfaces/product.interface";
import { cn, shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

const ProductCard = ({ images, ...product }: Product) => {
	const totalRating = calculateAverageRating(product.rating);
	return (
		<div className="duration-300 sm:w-full w-64 inline-block cursor-pointer bg-white rounded hover:shadow p-2 space-y-3">
			<div className="h-[220px] overflow-hidden w-full bg-gray-300 rounded-lg relative object-cover">
				<Image
					src={images[0].url ? images[0].url : ""}
					fill
					alt=""
					placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
					priority
					unoptimized
					className="bg-gray-300"
				/>
			</div>
			<div className="space-y-2">
				<h1 className="font-semibold">{product.title}</h1>
			</div>
		</div>
	);
};

export default ProductCard;

export function calculateAverageRating(ratings: Rating[]): number {
	if (ratings.length === 0) {
		return 0;
	}

	const totalValue = ratings.reduce((sum, rating) => sum + rating.value, 0);
	return totalValue / ratings.length;
}
