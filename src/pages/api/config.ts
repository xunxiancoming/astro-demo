export async function GET() {
  return new Response(
    JSON.stringify({ strapiUrl: import.meta.env.STRAPI_URL }),
    { headers: { "Content-Type": "application/json" } }
  );
}
