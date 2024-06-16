import axiosInstance from "@/services/api/axiosInstance";

export async function GET(req: any) {
	return handleRequest(req);
}

export async function POST(req: any) {
	return handleRequest(req);
}

export async function PUT(req: any) {
	return handleRequest(req);
}

export async function DELETE(req: any) {
	return handleRequest(req);
}

async function handleRequest(req: { url?: any; json?: any; method?: any }) {
	const { method } = req;
	const url = new URL(req.url);
	const query = Object.fromEntries(url.searchParams.entries());
	const targetUrl = `${process.env.API_BASE_URL!}${url.pathname.replace("/api", "")}`;
	try {
		let response;
		const body = await req.json();

		switch (method) {
			case "GET":
				response = await axiosInstance.get(targetUrl, { params: query });
				break;
			case "POST":
				response = await axiosInstance.post(targetUrl, body);
				break;
			case "PUT":
				response = await axiosInstance.put(targetUrl, body);
				break;
			case "DELETE":
				response = await axiosInstance.delete(targetUrl, { data: body });
				break;
			default:
				return new Response(`Method ${method} Not Allowed`, {
					status: 405,
					headers: { Allow: "GET, POST, PUT, DELETE" },
				});
		}

		return new Response(JSON.stringify(response.data), {
			status: response.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error: any) {
		const status = error.response ? error.response.status : 500;
		const data = error.response ? error.response.data : { message: "Internal Server Error" };
		return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
	}
}
