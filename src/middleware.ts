import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// A list of all locales that are supported
const supportedLocales = ['en', 'tr'];

export function middleware(request: NextRequest) {
  // Determine the default locale based on the request
  const country = request.geo?.country?.toLowerCase();
  let locale = 'en'; // default

  if (country === 'tr') {
    locale = 'tr';
  }

  // Clone the request and set the locale dynamically
  const response = NextResponse.next();
  response.headers.set('X-Default-Locale', locale);
  
  // Return the response so that it can be processed by next-intl
  return response;
}

// Use next-intl middleware
export default createMiddleware({
  locales: supportedLocales,
  defaultLocale: 'en', // fallback locale, will be overridden by middleware
});
