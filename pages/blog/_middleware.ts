import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.rewrite(url);
}
