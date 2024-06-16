import axios from "axios";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	return handleRequest(req);
}

export async function POST(req: Request) {
	return handleRequest(req);
}

export async function PUT(req: Request) {
	return handleRequest(req);
}

export async function DELETE(req: Request) {
	return handleRequest(req);
}

async function handleRequest(req: Request) {
	const cookieStore = cookies();
	const token = cookieStore.get("auth_token");
	const url = new URL(req.url);
	const { method } = req;
	const query = Object.fromEntries(url.searchParams.entries());
	const targetUrl = `https://${process.env.NEXT_PUBLIC_API_BASE_URL!}${url.pathname.replace("/api", "")}`;
	try {
		const body = req.body;
		const { data } = await axios.get(targetUrl, {
			params: query,
			method,
			headers: { Authorization: `Bearer ${token}` },
			data: { ...body },
		});
		return Response.json(data, { status: 200 });
	} catch (error: any) {
		console.error({ error });
		const status = error.response ? error.response.status : 500;
		const data = error.response ? error.response.data : { message: "Internal Server Error", error };
		return Response.json(data, { status });
	}
}
