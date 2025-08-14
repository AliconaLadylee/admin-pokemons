import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    method: req.method,
    count: 100,
  });
}
