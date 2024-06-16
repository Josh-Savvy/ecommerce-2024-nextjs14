"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomepageBanner = () => {
	const [api, setApi] = useState<CarouselApi>();
	const arr = Array.from({ length: 5 });
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		api?.on("select", () => {
			setCurrentIndex(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<>
			<Carousel setApi={setApi} plugins={[Autoplay({ delay: 5000 })]}>
				<CarouselContent className="gap-4">
					{arr.map((_, index) => {
						return (
							<CarouselItem key={index}>
								<Card className="h-[400px] md:h-[550px] !px-0 !py-0 !p-0 !pt-6 !m-0 w-full bg-[#E3D5CA] border-none overflow-hidden relative sm:rounded-3xl rounded-none z-40">
									<CardContent className="h-full relative lg:grid grid-cols-2 items-center w-full">
										<div
											className="bg-[#ccc] h-full w-full hidden lg:inline-flex rounded-tl-2xl rounded-bl-2xl"
											style={{
												background: "url('/assets/images/home/woman.png')",
												backgroundRepeat: "no-repeat",
												backgroundSize: "100% 100%",
											}}
										/>
										<div
											className="lg:px-4 h-full w-full flex gap-2 flex-col items-center justify-center lg:rounded-tr-2xl lg:rounded-br-2xl"
											style={{
												background: "url('/assets/images/home/texture.png')",
												backgroundRepeat: "no-repeat",
												backgroundSize: "100% 100%",
											}}>
											<h1
												className="text-[45px] md:text-[80px] lg:text-[100px] uppercase text-[#272727] font-bold"
												style={{ fontFamily: "cursive" }}>
												Prada
											</h1>
											<p className="tracking-tight lg:text-xl leading-none text-[#565656]">
												Big Fashion Festival
											</p>
											<p className="italic tracking-tight lg:text-xl leading-none text-[#565656]">
												50% - 80% off
											</p>
											<Button
												variant="outline"
												className="px-6 border border-[#272727] !bg-transparent duration-300 hover:bg-white">
												Explore
											</Button>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				{/* <CarouselPrevious /> */}
				{/* <CarouselNext /> */}
			</Carousel>
			<div className="flex items-center justify-center gap-3 mt-5">
				{arr.map((_, index) => {
					const isCurrent = currentIndex === index;
					return (
						<span
							className={cn(isCurrent ? "bg-[#002482] h-3 w-3" : "bg-zinc-300 h-2 w-2", "rounded-full")}
							key={index}
						/>
					);
				})}
			</div>
		</>
	);
};

export default HomepageBanner;
