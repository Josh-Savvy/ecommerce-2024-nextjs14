import type { GetProductsResponse } from "@/interfaces/api-response.interface";
import API from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useProducts = (args?: { productId?: string; limit?: number; skip?: number }) => {
	const { productId, limit, skip } = args || {};
	const isProductId = Boolean(productId && productId.trim.length > 0);
	const allProductsQuery = useQuery<any, any, GetProductsResponse>({
		queryKey: [productId || "products", { limit, skip }],
		queryFn: async (args) => await API.getProducts(args.queryKey),
		enabled: !isProductId,
		refetchOnReconnect: true,
		// refetchOnWindowFocus: true,
	});
	const singleProductsQuery = useQuery<any, any, GetProductsResponse>({
		queryKey: [productId || "view-product"],
		queryFn: async () => await API.getProductById(String(productId)),
		enabled: isProductId,
		refetchOnReconnect: true,
		// refetchOnWindowFocus: true,
	});

	return isProductId ? singleProductsQuery : allProductsQuery;
};

export default useProducts;
