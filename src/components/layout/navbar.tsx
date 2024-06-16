import React from "react";
import AnnouncementBanner from "../atoms/announcement-banner";
import Link from "next/link";
import SearchBar from "./_components/search-bar";
import AuthCta from "./_components/auth-cta";
import { Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
	return (
		<>
			<div className="sm:px-12 p-6 py-5 fixed bg-white flex justify-between gap-10 top-0 left-0 min-h-10 w-full z-40 shadow">
				<div className="flex items-center gap-12">
					<Link href="/">
						<Logo />
					</Link>
					<div className="flex items-center gap-6">
						{navlinks.map(({ label, link }, index) => (
							<Link key={index} href={link} className="font-medium">
								<span className="text-sm">{label}</span>
							</Link>
						))}
					</div>
				</div>
				<div className="flex items-center gap-4 flex-grow justify-end">
					<div className="w-full max-w-sm">
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
			<AnnouncementBanner />
		</>
	);
};

export default Navbar;

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
