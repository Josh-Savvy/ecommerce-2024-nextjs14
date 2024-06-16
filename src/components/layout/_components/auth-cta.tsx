"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";
import React from "react";

const AuthCta = () => {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? (
		<div>authenticated</div> //Todo
	) : (
		<div className="flex item-center gap-2">
			<Link href="#sign-in">
				<Button>Sign in</Button>
			</Link>
			<Link href="#sign-up">
				<Button variant={"outline"}>Sign up</Button>
			</Link>
		</div>
	);
};

export default AuthCta;
