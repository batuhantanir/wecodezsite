import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "tr"];
let defaultLocale = "en";

export function middleware(request: NextRequest) {
  const country = request.geo?.country?.toLowerCase() || "en";
  request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;

  if (locales.includes(country) && !request.cookies.get("NEXT_LOCALE")?.value) {
    defaultLocale = country;
  }

  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const cookieLocale =
    request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;
  // Full locale (e.g. `en-US`)
  // response.headers.set('x-locale', locale);

  // Set header to simulate correct response for `next-intl`
  // response.headers.set('X-NEXT-INTL-LOCALE', localeShort);

  // Set cookie to simulate correct response for `next-intl`
  response.cookies.set("NEXT_LOCALE", cookieLocale);

  return response;
}

export const config = {
  matcher: ["/:path*"],
};
