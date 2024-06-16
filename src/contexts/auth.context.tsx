"use client";

import type User from "@/interfaces/user.interface";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import jsCookie from "js-cookie";

export interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	access_token: string | null;
	refresh_token: string | null;
}

export interface AuthContextType extends AuthState {
	login: (user: User, args: { refresh_token: string; access_token: string }) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
	access_token: null,
	isAuthenticated: false,
	refresh_token: "",
	user: null,
	login() {},
	logout() {},
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [state, setState] = useState<AuthState>({
		isAuthenticated: false,
		user: null,
		access_token: null,
		refresh_token: null,
	});

	const login = (user: User, args: { refresh_token: string; access_token: string }) => {
		setState({
			isAuthenticated: true,
			user,
			access_token: args.access_token,
			refresh_token: args.refresh_token,
		});
		jsCookie.set("auth_token", args.access_token);
		const expires = new Date();
		expires.setDate(expires.getDate() + 1);
		jsCookie.set("auth_refresh_token", args.refresh_token, { expires });
	};

	const logout = () => {
		setState({
			isAuthenticated: false,
			user: null,
			access_token: null,
			refresh_token: null,
		});
		jsCookie.remove("auth_token");
		jsCookie.remove("auth_refresh_token");
	};

	useEffect(() => {
		if (!state.access_token) {
			// Todo
		}
	}, []);
	return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
