import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (token) {
    return new Response(token);
  } else {
    return new Response("Token not found", { status: 404 });
  }
}
