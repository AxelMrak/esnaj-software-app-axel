import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
	],
};

export function middleware(req) {
	const sanitizedPathname = req.nextUrl.pathname.replace(/\/{2,}/g, '/');
	if (sanitizedPathname !== req.nextUrl.pathname) {
		return NextResponse.redirect(new URL(sanitizedPathname, req.url));
	}

	if (
		req.nextUrl.pathname.indexOf('icon') > -1 ||
		req.nextUrl.pathname.indexOf('chrome') > -1
	)
		return NextResponse.next();
	const pathname = req.nextUrl.pathname;
	const hasLocalePrefix = languages.some((loc) =>
		pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
	);
	const isInternalAsset = pathname.startsWith('/_next');

	if (!hasLocalePrefix && !isInternalAsset) {
		const suffix = pathname === '/' ? '' : pathname;
		return NextResponse.redirect(new URL(`/${fallbackLng}${suffix}`, req.url));
	}

	if (req.headers.has('referer')) {
		const refererUrl = new URL(req.headers.get('referer'));
		const lngInReferer = languages.find((l) =>
			refererUrl.pathname.startsWith(`/${l}`)
		);
		const response = NextResponse.next();
		if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
		return response;
	}

	return NextResponse.next();
}
