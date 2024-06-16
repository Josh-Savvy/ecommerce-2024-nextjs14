"use client";

import ProductCard from "@/components/atoms/cards/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { GetProductsResponse } from "@/interfaces/api-response.interface";
import API from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TrendingProducts = () => {
	const { data, isLoading, error } = useQuery<any, any, GetProductsResponse>({
		queryKey: ["trending-products"],
		queryFn: async () => await API.getProducts(),
		refetchOnReconnect: true,
		// refetchOnWindowFocus: true,
	});

	return (
		<>
			<h1 className="px-3 text-xl lg:text-2xl font-bold">Trending Products</h1>
			<div className="flex sm:grid sm:overflow-hidden overflow-x-scroll hide-scroll-bar">
				<div className="flex flex-nowrap gap-3 gap-y-6 pb-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:grid px-3 sm:px-0">
					{isLoading ? (
						Array.from({ length: 8 }).map((_, index) => <ProductSkeleton key={index} />)
					) : error ? (
						<div className="text-lg font-semibold text-red-500 text-center">Something went wrong </div> // Todo
					) : (
						data?.data?.map((product, index) => <ProductCard key={index} {...product} />)
					)}
				</div>
			</div>
		</>
	);
};

const ProductSkeleton = () => {
	return (
		<div className="duration-300 sm:w-full w-64 inline-block cursor-pointer bg-white p-2 space-y-3">
			<div className="h-[220px] overflow-hidden w-full bg-gray-300 rounded-lg relative object-cover">
				<Skeleton className="h-full w-full" />
			</div>
			<div className="w-full h-full space-y-2">
				<Skeleton className="h-3 w-[50%]" />
				<Skeleton className="h-3 w-[20%]" />
				<div className="flex items-center gap-6">
					<Skeleton className="h-3 w-[45%]" />
					<Skeleton className="h-3 w-[56%]" />
				</div>
			</div>
		</div>
	);
};

export default TrendingProducts;
