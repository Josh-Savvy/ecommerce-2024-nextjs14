"use client";

import ProductCard from "@/components/atoms/cards/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import type Product from "@/interfaces/product.interface";
import API from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TrendingProducts = () => {
	const { data, isLoading } = useQuery<any, any, Product[]>({
		queryKey: ["trending-products"],
		queryFn: async () => await API.getProducts(),
	});
	return (
		<>
			<h1 className="px-3">Trending</h1>
			<div className="flex sm:grid sm:overflow-hidden overflow-x-scroll hide-scroll-bar">
				<div className="flex flex-nowrap gap-3 gap-y-6 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:grid px-3 sm:px-0">
					{isLoading
						? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index}></Skeleton>)
						: data?.map((product, index) => <ProductCard key={index} {...product} />)}
				</div>
			</div>
		</>
	);
};

export default TrendingProducts;
