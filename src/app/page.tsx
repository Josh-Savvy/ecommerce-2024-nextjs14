// import { Metadata } from "next";

import MaxWidthContainer from "@/components/layout/_components/max-width-container";
import HomepageBanner from "@/components/organisms/home/banner";

// const metadata:Metadata={}

export default function Home() {
	return (
		<MaxWidthContainer className="min-h-[300vh] pt-10">
			<HomepageBanner />
		</MaxWidthContainer>
	);
}