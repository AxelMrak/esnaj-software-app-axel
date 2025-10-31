import { fallbackLng, languages } from '@/app/i18n/settings';

const collapseSlashes = (value) => value.replace(/\/{2,}/g, '/');

export const ensureLocale = (lng) =>
	languages.includes(lng) ? lng : fallbackLng;

export const normalizePathSegment = (path = '') => {
	if (!path || path === '/') {
		return '';
	}

	const trimmed = collapseSlashes(path.trim());
	const withLeadingSlash =
		trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
	const withoutTrailingSlash = withLeadingSlash.endsWith('/')
		? withLeadingSlash.slice(0, -1)
		: withLeadingSlash;

	return withoutTrailingSlash === '/' ? '' : withoutTrailingSlash;
};

export const buildLocalizedPath = (path, lng) => {
	const locale = ensureLocale(lng);
	const normalizedPath = normalizePathSegment(path);

	return normalizedPath ? `/${locale}${normalizedPath}` : `/${locale}`;
};
