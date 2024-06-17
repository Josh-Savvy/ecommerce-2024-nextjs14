import React from "react";

type Props = { params: { id: string } };

const ViewProductPage = ({ params: { id } }: Props) => {
	return <div>ViewProductPage: {id}</div>;
};

export default ViewProductPage;
