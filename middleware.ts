import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

import { APP_ROUTES } from '@/consts';

export default async function AuthMiddleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_SECRET,
  });

  const shouldRedirect = pathname.startsWith(APP_ROUTES.DASHBOARD_PAGE_PATH) && !token;

  if (shouldRedirect) {
    return NextResponse.redirect(new URL(APP_ROUTES.UNAUTHORIZED_PATH, req.url));
  }

  return res;
}
