import { Category } from "@/interfaces/product.interface";
import API from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const useCategories = (args?: { queryKey?: string; categoryId?: string; limit?: number; skip?: number }) => {
	const { queryKey, categoryId, limit, skip } = args || {};
	const isCategoryId = Boolean(categoryId && categoryId?.trim().length > 0);

	const allCategoriesQuery = useQuery<any, any, { data: Category[] }, any>({
		queryKey: [queryKey || categoryId || "categories", { limit, skip }],
		enabled: !isCategoryId,
		queryFn: async (args) => await API.fetchCategories(args.queryKey),
	});

	const categoryIdQuery = useQuery<any, any, { data: Category[] }, any>({
		queryKey: [categoryId, "view-category"],
		enabled: isCategoryId,
		queryFn: async () => await API.fetchSingleCategory(String(categoryId)),
	});

	return isCategoryId ? categoryIdQuery : allCategoriesQuery;
};
export default useCategories;
