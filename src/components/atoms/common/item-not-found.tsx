import Link from "next/link";
import React from "react";

type Props = { name: string; fallbackLink?: string };

const ItemNotFound = ({ name, fallbackLink }: Props) => {
	return (
		<section className="">
			<div className="container flex items-center justify-center min-h-[50vh] px-6 py-12 mx-auto">
				<div>
					<p className="text-sm font-medium text-blue-500">404 error</p>
					<h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
						We cannot find that {name.toLowerCase() || "page"}
					</h1>
					<p className="mt-4 text-gray-500">
						Sorry, the {name.toLowerCase() || "page"} you are looking for does not exist.
					</p>

					<div className="flex items-center mt-6 gap-x-3">
						<Link href={fallbackLink || "/"}>
							<button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
								<svg
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-5 h-5 rtl:rotate-180">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
									/>
								</svg>
								<span>Go {fallbackLink ? "back" : "home"}</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ItemNotFound;
