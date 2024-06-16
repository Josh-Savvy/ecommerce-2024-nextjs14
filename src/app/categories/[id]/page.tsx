import React from "react";

type Props = { params: { id: string } };

const ViewCategoryPage = ({ params: { id } }: Props) => {
	return <div>ViewCategoryPage :{id}</div>;
};

export default ViewCategoryPage;
