import Product from "@/interfaces/product.interface";
import { cn, shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

const ProductCard = ({ images }: Product) => {
	return (
		<div className="duration-300 sm:w-full w-64 inline-block cursor-pointer bg-white rounded hover:shadow p-2">
			<div className="h-[220px] overflow-hidden w-full bg-gray-100 rounded-lg relative object-cover">
				<Image
					src={images[0].url ? images[0].url : ""}
					fill
					alt=""
					placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
					priority
					unoptimized
				/>
			</div>
			<div className="">Hello</div>
		</div>
	);
};

export default ProductCard;
