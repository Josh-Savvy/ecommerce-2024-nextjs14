import React from "react";
import FooterCategoriesSection from "./_components/categories-section";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import FooterStayInTouchSection from "./_components/stay-in-touch-section";

const Footer = () => {
	return (
		<footer className="bg-[#00071B] min-h-[200px] w-full text-white py-6">
			<div className="px-4 sm:px-0 relative flex justify-start">
				<Link href="/" className="flex items-end gap-3 sm:px-12">
					<svg width="56" height="44" viewBox="0 0 76 64" fill="none">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M51.4005 50.4413L75.9923 64L76 30.2056L51.4005 16.0194V50.4413ZM25.1741 0L52.0343 12.3311L26.7702 30.2045L26.7614 64L0 51.509V18.0093L25.1741 0Z"
							fill="white"
						/>
					</svg>
					<h1 className="font-bold font-serif text-xl uppercase">ShopCommerce</h1>
				</Link>
			</div>
			<div className="sm:px-16 px-6 w-full flex flex-wrap gap-y-5 lg:grid-cols-4 gap-3 pt-5 items-start justify-between p-9 sm:p-6">
				<FooterCategoriesSection />
				<ul className="space-y-2">
					<h1 className="font-serif font-semibold text-lg mb-2">Shopping</h1>
					{shoppingLinks.map((item, index) => (
						<li key={index} className="text-sm tracking-tight">
							<Link prefetch={false} href={item.link}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
				<ul className="space-y-2">
					<h1 className="font-serif font-semibold text-lg mb-2">More Links</h1>
					<li className="text-sm tracking-tight">Link 1</li>
					<li className="text-sm tracking-tight">Link 2</li>
					<li className="text-sm tracking-tight">Link 3</li>
					<li className="text-sm tracking-tight">Link 4</li>
				</ul>
				<div className="flex flex-col items-end justify-end">
					<FooterStayInTouchSection />
				</div>
			</div>
			<div className="border-t-[1px] border-t-white/60 py-5 flex gap-6 justify-center items-center">kdslcd</div>
		</footer>
	);
};

export default Footer;

const shoppingLinks: { label: string; link: string }[] = [
	{ label: "Your cart", link: "#" },
	{ label: "your orders", link: "#" },
	{ label: "Compared items", link: "#" },
	{ label: "Wishlist", link: "#" },
	{ label: "Shipping Details", link: "#" },
];

const moreLinks: { label: string; link: string }[] = [
	{ label: "Blogs", link: "#" },
	{ label: "Gift center", link: "#" },
	{ label: "Buying guides", link: "#" },
	{ label: "New arrivals", link: "#" },
	{ label: "Clearance", link: "#" },
];
