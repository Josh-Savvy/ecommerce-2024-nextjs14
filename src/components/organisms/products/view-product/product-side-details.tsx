"use client";

import { calculateAverageRating } from "@/components/atoms/cards/product-card";
import { Rating } from "@/components/atoms/common/rating";
import { Button } from "@/components/ui/button";
import type Product from "@/interfaces/product.interface";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const ProductSideDetails = (prod: Product) => {
	const totalRating = calculateAverageRating(prod.rating);
	const [selected, setSelected] = useState<string>("s");
	return (
		<div className="xl:flex-col flex sm:flex-row flex-col gap-3 items-start w-full sm:justify-between xl:justify-normal">
			<div className="space-y-1 lg:space-y-3">
				<h1 className="font-semibold font-serif tracking-tight text-xl md:text-2xl lg:text-3xl">
					{prod.title}
				</h1>
				<p className="text-[16px] tracking-tight">
					Category: <span className="font-medium">{prod.category.title}</span>
				</p>
				<p className="text-[16px] tracking-tight">
					Seller&apos;s contact:{" "}
					<span className="font-medium">{prod.seller.user.email.slice(0, 3)}*****</span>
				</p>
				<div className="flex items-center gap-1">
					<Rating rating={totalRating} />
					<p className="text-sm text-gray-400">{totalRating.toFixed(1)}</p>
					<p className="text-sm ml-3">{prod.rating.length.toLocaleString()} reviews</p>
				</div>
				<div className="flex items-center gap-3">
					{prod.discoutedPrice ? (
						<p className="font-semibold text-lg">${prod.discoutedPrice}</p>
					) : (
						<p className="font-semibold text-lg">${prod.price}</p>
					)}
					{prod.discoutedPrice && <p className="text-sm text-black/50">{prod.price}</p>}
					{prod.percentageOff && prod.percentageOff > 0 && (
						<p className="text-sm text-black/50">({prod.percentageOff}% off)</p>
					)}
				</div>

				{prod.availableSizes && prod.availableSizes.length > 0 && (
					<div className="flex flex-wrap gap-2 items-center">
						{prod.availableSizes.map((item, index) => (
							<span
								className={cn(
									selected.trim().toLowerCase() === item.trim().toLowerCase() &&
										"bg-blue-500 border-none text-white",
									"uppercase rounded-full h-10 w-10 border border-gray-200 select-none flex items-center cursor-pointer justify-center duration-300",
								)}
								key={index}
								onClick={() => setSelected(item)}>
								{item}
							</span>
						))}
					</div>
				)}
			</div>
			<div className="flex items-center gap-3">
				<Button className="bg-[#002482] px-6">Add to cart</Button>
				<Heart fill="#d31" strokeWidth={0} size={35} className="cursor-pointer xl:order-last sm:order-first" />
			</div>
		</div>
	);
};

export default ProductSideDetails;
