import { buildTurtle } from "@/lib/turtle";

export const dynamic = "force-static";

export async function GET() {
  return new Response(buildTurtle(), {
    headers: { "Content-Type": "text/turtle; charset=utf-8" },
  });
}
