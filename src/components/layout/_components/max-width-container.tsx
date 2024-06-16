import { cn } from "@/lib/utils";
import React from "react";

type Props = { children?: React.ReactNode; className?: string };

const MaxWidthContainer = ({ children, className }: Props) => {
	return <div className={cn(className, "px-12 sm:px-6")}>{children}</div>;
};

export default MaxWidthContainer;
