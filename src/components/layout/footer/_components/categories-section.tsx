import { Category } from "@/interfaces/product.interface";
import Link from "next/link";
import React from "react";

export default async function FooterCategoriesSection() {
	const { data } = (await fetch(`${process.env.API_BASE_URL}/categories?limit=5&skip=3`).then((res) =>
		res.json(),
	)) as {
		data: Category[];
	};
	return (
		<>
			<ul className="space-y-2">
				<h1 className="font-serif font-semibold text-lg mb-2">Categories</h1>
				{data.map((item, index) => (
					<li className="text-sm tracking-tight" key={index}>
						<Link prefetch={false} key={index} href={`/categories/${item.id}`}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
