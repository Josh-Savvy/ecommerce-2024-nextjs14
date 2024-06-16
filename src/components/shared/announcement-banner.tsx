import { cn } from "@/lib/utils";
import React from "react";

type Props = { message: string; link?: string; onClose?: () => void; className?: string };

const AnnouncementBanner = () => {
	return (
		<div
			className={cn(
				"p-3 bg-[#F9FAFF] flex items-center justify-center mt-16 w-full h-16 sticky top-20 overflow-hidden z-40",
			)}>
			<h1 className="tracking-tight text-sm leading-none">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi animi assumenda cum possimus officiis,
				nemo voluptas quo ex libero pariatur sit.
			</h1>
			<span className="text-2xl absolute right-6">&times;</span>
		</div>
	);
};

export default AnnouncementBanner;
