import SVG_ICONS from "@/components/atoms/icons";
import React from "react";

const AppFeatures = () => {
	// F0F0F0
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full items-center justify-center">
			{features.map((feat, index) => (
				<FeatureCard key={index} {...feat} />
			))}
		</div>
	);
};

const FeatureCard = (feat: Feature) => {
	const Icon = SVG_ICONS[feat.icon];
	return (
		<div className="h-[200px] w-full rounded bg-[#F0F0F0] cursor-default flex flex-col gap-3 items-center justify-center p-3">
			<div className="">
				<Icon />
			</div>
			<h1 className="text-center text-[#272727] font-semibold text-[16px]">{feat.label}</h1>
			<p className="text-center text-[#272727] tracking-tight text-sm">{feat.description}</p>
		</div>
	);
};

type Feature = { label: string; icon: keyof typeof SVG_ICONS; description: string };

const features: Feature[] = [
	{ label: "Locally Owned", description: "We have local business and sell best quality clothes", icon: "FlagIcon" },
	{ label: "Fast Delivery", description: "We provide fast delivery to our customers", icon: "CarIcon" },
	{ label: "Easy Return", description: "We provide easy return policy. ", icon: "BoxIcon" },
	{ label: "Online Support", description: "We give 24/7 online support", icon: "SupportIcon" },
	{ label: "Best Offers", description: "We give best offers to our customers", icon: "BestOfferIcon" },
];

export default AppFeatures;
