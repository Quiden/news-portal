import { NextRequest, NextResponse } from 'next/server';

import { ROUTES } from '@/shared/config/routes';

const ACCESS_PATHS = [ROUTES['/sign-in'], ROUTES['/sign-up']];

const shouldAllowAccess = (pathname: string, paths: Array<string>): boolean =>
  paths.includes(pathname);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('token')?.value;

  if (!token) {
    if (shouldAllowAccess(pathname, ACCESS_PATHS)) {
      return NextResponse.next();
    }

    return Response.redirect(new URL(ROUTES['/sign-in'], request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
