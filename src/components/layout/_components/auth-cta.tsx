"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth.context";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthCta = () => {
	const { isAuthenticated, user } = useAuth();
	return isAuthenticated && user ? (
		<div>
			<Avatar>
				<AvatarImage src={user.avatar} />
				<AvatarFallback>
					{user.firstName.charAt(0)} {user.lastName.charAt(0)}
				</AvatarFallback>
			</Avatar>
		</div> //Todo
	) : (
		<>
			<div className="sm:hidden item-center gap-2">
				<Link href="#sign-in">
					<User />
				</Link>
			</div>
			<div className="sm:flex hidden item-center gap-2">
				<Link href="#sign-in">
					<Button>Sign in</Button>
				</Link>
				<Link href="#sign-up">
					<Button variant={"outline"}>Sign up</Button>
				</Link>
			</div>
		</>
	);
};

export default AuthCta;
