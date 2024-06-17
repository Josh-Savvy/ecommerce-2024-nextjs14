"use client";
import { Mail } from "lucide-react";
import React from "react";

const FooterStayInTouchSection = () => {
	return (
		<div className="flex flex-col gap-2 max-w-sm">
			<h1 className="font-serif font-semibold text-lg">Stay In Touch</h1>
			<p className="text-sm">Stay in touch to get special offers, free giveaways and once in a lifetime deals</p>
			<div className="flex gap-1 items-center border border-white rounded px-2">
				<Mail />
				<input
					placeholder="Enter your email"
					className="bg-transparent placeholder:text-[#ABABAB] py-3 outline-none focus:ring-0"
				/>
			</div>
		</div>
	);
};

export default FooterStayInTouchSection;
