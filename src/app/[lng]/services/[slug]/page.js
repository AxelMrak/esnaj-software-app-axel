import React from 'react';
import ServiceMain from '../../components/pages/ServiceMain';
import { useTranslation as loadTranslations } from '@/app/i18n';
import { buildPageMetadata } from '@/utils/seo';
import { ensureLocale } from '@/utils/paths';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params: { lng, slug } }) {
	const locale = ensureLocale(lng);
	const baseMetadata = buildPageMetadata({
		key: 'services',
		lng: locale,
		path: `/services/${slug}`,
	});

	const { t } = await loadTranslations(locale);
	const services = t('home.services.main-services') || [];
	const service = services.find((item) => item.slug === slug);

	if (!service) {
		return baseMetadata;
	}

	const description = service['long-description'] || baseMetadata.description;
	const title = `${service.name} | Esnaj Software`;

	return {
		...baseMetadata,
		title,
		description,
		openGraph: {
			...baseMetadata.openGraph,
			title,
			description,
		},
		twitter: {
			...baseMetadata.twitter,
			title,
			description,
		},
	};
}

export default async function Page({ params: { lng, slug } }) {
	const locale = ensureLocale(lng);
	const { t } = await loadTranslations(locale);
	const services = t('home.services.main-services') || [];
	const serviceExists = services.some((item) => item.slug === slug);

	if (!serviceExists) {
		notFound();
	}

	return <ServiceMain lng={locale} slug={slug} />;
}
