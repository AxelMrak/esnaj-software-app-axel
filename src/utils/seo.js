import { fallbackLng, languages } from '@/app/i18n/settings';
import { METADATA } from '@/utils/constants';
import { buildLocalizedPath, ensureLocale, normalizePathSegment } from './paths';

const DEFAULT_SITE_URL = 'https://www.esnajsoftware.com';

const stripTrailingSlash = (value) =>
	value.endsWith('/') && value !== '/' ? value.slice(0, -1) : value;

const baseUrl = stripTrailingSlash(
	process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
);

export const metadataBase = new URL(baseUrl);

export const buildAbsoluteUrl = (lng, path = '') => {
	const localizedPath = buildLocalizedPath(path, lng);
	return `${baseUrl}${localizedPath}`;
};

export const buildAlternates = (path = '', lng) => {
	const locale = ensureLocale(lng);
	const normalizedPath = normalizePathSegment(path);

	const canonical = normalizedPath
		? `/${locale}${normalizedPath}`
		: `/${locale}`;

	const languagesAlternates = Object.fromEntries(
		languages.map((lang) => [lang, buildLocalizedPath(path, lang)])
	);

	return {
		canonical,
		languages: {
			...languagesAlternates,
			'x-default': buildLocalizedPath(path, fallbackLng),
		},
	};
};

export const buildPageMetadata = ({ key, lng, path = '' }) => {
	const locale = ensureLocale(lng);
	const metadataKey = `${key}_${locale}`;
	const details = METADATA[metadataKey];

	if (!details) {
		return {};
	}

	const alternates = buildAlternates(path, locale);
	const absoluteUrl = buildAbsoluteUrl(locale, path);

	return {
		title: details.title,
		description: details.description,
		keywords: details.keywords,
		alternates,
		openGraph: {
			title: details.title,
			description: details.description,
			url: absoluteUrl,
			siteName: 'Esnaj Software',
			locale,
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: details.title,
			description: details.description,
		},
	};
};
