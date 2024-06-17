"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const initialQueryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } });

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => initialQueryClient);

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
