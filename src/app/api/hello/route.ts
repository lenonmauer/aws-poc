export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  Response.json({ ok: true, time: Date.now() })
}

