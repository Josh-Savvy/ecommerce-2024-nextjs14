"use client";
import type Product from "@/interfaces/product.interface";
import type { ProductImage } from "@/interfaces/product.interface";
import { toBase64, shimmer, cn } from "@/lib/utils";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const ProductImageGallery = (prod: Product) => {
	const images = useMemo(() => prod.images, [prod]);
	const [focusedImage, setFocusedImage] = useState<ProductImage>(images[0]);
	const [loading, setLoading] = useState<boolean>(true);
	return (
		<div className="grid grid-cols-12 gap-3 w-full">
			<div className="xl:col-span-3 lg:col-span-4 grid gap-2">
				{images.map((item, index) => {
					return (
						<div
							className={cn(
								item.id === focusedImage.id && "border-[#00398F] border-2",
								"relative w-full h-[150px] overflow-hidden rounded-lg shadow cursor-pointer",
							)}
							onClick={() => setFocusedImage(item)}
							key={index}>
							<Image
								src={item.url}
								fill
								alt=""
								placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
								priority
								unoptimized
								className={item.id === focusedImage.id ? "p-1 rounded" : ""}
							/>
						</div>
					);
				})}
			</div>
			<div className="xl:col-span-9 lg:col-span-8">
				<div className="relative w-full h-[510px] overflow-hidden rounded-lg shadow duration-700">
					<Image
						src={focusedImage.url}
						fill
						alt=""
						placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
						priority
						unoptimized
						className="bg-gray-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductImageGallery;
