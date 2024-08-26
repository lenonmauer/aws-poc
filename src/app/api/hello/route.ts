export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url)

  return Response.json({ ok: true, time: Date.now(), query: searchParams.toString(), pathname })
}

