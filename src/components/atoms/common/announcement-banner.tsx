"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const AnnouncementBanner = () => {
	const [bannerHidden, setBannerHidden] = useState<boolean>(false);
	// Todo: get announcement api
	if (bannerHidden) return <></>;
	return (
		<div
			className={cn(
				"p-3 bg-[#fff] shadow flex items-center justify-center w-full h-16 sticky top-20 overflow-hidden !z-40",
			)}>
			<h1 className="tracking-tight text-sm leading-none">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi animi assumenda cum possimus officiis,
				nemo voluptas quo ex libero pariatur sit.
			</h1>
			<span onClick={() => setBannerHidden(true)} className="text-2xl absolute right-6 cursor-pointer">
				&times;
			</span>
		</div>
	);
};

export default AnnouncementBanner;
