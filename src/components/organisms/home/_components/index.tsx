import React from "react";

type Props = { title: string };

const SectionTitle = ({ title }: Props) => {
	return <h1 className="px-3 text-xl lg:text-2xl font-bold">{title}</h1>;
};

export default SectionTitle;
