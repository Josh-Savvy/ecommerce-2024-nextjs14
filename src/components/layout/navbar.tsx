import React from "react";
import AnnouncementBanner from "../atoms/common/announcement-banner";
import Link from "next/link";
import SearchBar from "./_components/search-bar";
import AuthCta from "./_components/auth-cta";
import { ChevronDown, Heart, ShoppingCart } from "lucide-react";
import type { Category } from "@/interfaces/product.interface";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuPortal,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default async function Navbar() {
	const { data } = (await fetch(`${process.env.API_BASE_URL}/categories?limit=6`).then((res) => res.json())) as {
		data: Category[];
	};

	return (
		<>
			<div className="sm:px-12 p-6 py-5 fixed bg-white flex justify-between gap-10 top-0 left-0 min-h-10 w-full !z-40 shadow">
				<div className="flex items-center gap-12">
					<Link href="/">
						<Logo />
					</Link>
					<div className="max-w-md hidden sm:flex">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<span className="flex items-center gap-1 text-sm tracking-tight cursor-pointer">
									Browse Categories <ChevronDown size={15} />
								</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[300px] !justify-end">
								<DropdownMenuGroup>
									{data.map((item, index) => (
										<Link
											prefetch={false}
											key={index}
											href={`/categories/${item.id}`}
											className="font-medium">
											<DropdownMenuItem
												asChild
												inset
												className={cn(
													index > 0 && "border-t rounded-none",
													"py-3 !cursor-pointer",
												)}>
												<span className="text-[15px] font-[500]">{item.title}</span>
											</DropdownMenuItem>
										</Link>
									))}
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
				<div className="flex items-center gap-4 flex-grow justify-end">
					<div className="w-full max-w-sm md:inline-flex hidden">
						<SearchBar />
					</div>
					<Link href="/favourites">
						<Heart />
					</Link>
					<Link href="/cart">
						<ShoppingCart />
					</Link>
					<AuthCta />
				</div>
			</div>
			<br />
			<br />
			<br />
			<AnnouncementBanner />
		</>
	);
}

export const Logo = () => {
	return (
		<svg width="53" height="44" viewBox="0 0 57 48" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M38.5503 37.831L56.9942 48L57 22.6542L38.5503 12.0146V37.831ZM18.8805 0L39.0257 9.2483L20.0776 22.6534L20.071 48L0 38.6318V13.507L18.8805 0Z"
				fill="#002482"
			/>
		</svg>
	);
};

type NavLink = {
	label: string;
	link: string;
};

const navlinks: NavLink[] = [
	{ label: "Men", link: "#" },
	{ label: "Women", link: "#" },
	{ label: "Kids", link: "#" },
	{ label: "Shop", link: "#" },
	{ label: "Contact us", link: "#" },
];
