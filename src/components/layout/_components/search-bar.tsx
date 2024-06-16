"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const SearchBar = () => {
	const [query, setQuery] = useState<string>("");
	return <Input />;
};

export default SearchBar;
