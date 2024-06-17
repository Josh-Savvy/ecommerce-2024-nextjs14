"use client";
import type { Category } from "@/interfaces/product.interface";
import API from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionTitle from "../_components";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useCategories from "@/hooks/useCategories";
import { ArrowRight } from "lucide-react";

const ShopbyCategories = () => {
	const { data, isLoading, error } = useCategories();
	return isLoading ? (
		<>Loading...</>
	) : error || !data ? (
		<>Something went wrong</>
	) : (
		<div>
			<SectionTitle title="Shop by category" />
			<div className="grid grid-cols-12 gap-3 pt-5">
				<div className="hidden lg:inline-flex h-full w-full col-span-5 relative overflow-hidden bg-gray-300 rounded group">
					{data.data.slice(0, 1).map((cat, index) => (
						<>
							<div
								key={index}
								className="text-white absolute top-0 left-0 h-full w-full group-hover:opacity-100 opacity-100 sm:opacity-0 duration-300 bg-gradient-to-t from-black/80 to-black/10 z-10 p-5 flex flex-col gap-1 items-start justify-start">
								<h1 className="font-semibold tracking-tight leading-none">{cat.title}</h1>
								<Link href={`#${cat.id}`} className="underline flex items-center gap-1">
									<span>Explore</span> <ArrowRight size={18} />
								</Link>
							</div>
							<Image
								src={cat.imageUrl ? cat.imageUrl : ""}
								fill
								alt=""
								placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
								priority
								unoptimized
								className="bg-gray-300"
							/>
						</>
					))}
				</div>
				<div className="h-full w-full col-span-12 lg:col-span-7 relative overflow-hidden grid sm:grid-cols-2 gap-3">
					{data.data.slice(1, 4).map((cat, index) => (
						<CategoryItem key={index} {...cat} />
					))}
					<div className="grid md:grid-cols-2 gap-3 w-full h-full">
						{data.data.slice(4, 6).map((cat, index) => (
							<CategoryItem key={index} {...cat} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const CategoryItem = (cat: Category) => {
	return (
		<div className="h-[220px] w-full rounded relative overflow-hidden bg-gray-300 group">
			<div className="text-white absolute top-0 left-0 h-full w-full group-hover:opacity-100 opacity-100 sm:opacity-0 duration-300 bg-gradient-to-t from-black/80 to-black/10 z-10 p-5 flex flex-col gap-1 items-start justify-start">
				<h1 className="font-semibold tracking-tight leading-none">{cat.title}</h1>
				<Link href={`#${cat.id}`} className="underline flex items-center gap-1">
					<span>Explore</span> <ArrowRight size={18} />
				</Link>
			</div>
			<Image
				src={cat.imageUrl ? cat.imageUrl : ""}
				fill
				alt=""
				placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
				priority
				unoptimized
				className="bg-gray-300"
			/>
		</div>
	);
};

export default ShopbyCategories;
