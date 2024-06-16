import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import ReactQueryProvider from "@/providers/react-query.provider";
import AuthProvider from "@/contexts/auth.context";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>
				<ReactQueryProvider>
					<AuthProvider>
						<Toaster />
						<Navbar />
						{children}
					</AuthProvider>
				</ReactQueryProvider>
			</body>
			{/* // Todo: footer */}
		</html>
	);
}
