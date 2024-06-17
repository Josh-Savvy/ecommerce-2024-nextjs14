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
			<div className="col-span-12 sm:col-span-2 grid sm:grid-cols-1 grid-cols-3 gap-2 sm:order-first order-last h-full">
				{images.map((item, index) => {
					return (
						<div
							className={cn(
								item.id === focusedImage.id && "border-[#00398F] border-2",
								"relative w-full h-[100px] sm:h-[150px] overflow-hidden rounded-lg shadow cursor-pointer",
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
			<div className="col-span-12 sm:col-span-10">
				<div className="relative w-full h-[400px] sm:h-[510px] overflow-hidden rounded-lg shadow duration-700">
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
