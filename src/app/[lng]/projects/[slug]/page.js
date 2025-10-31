import React from 'react';
import ProjectMain from '../../components/pages/ProjectMain';
import { useTranslation as loadTranslations } from '@/app/i18n';
import { buildPageMetadata, metadataBase } from '@/utils/seo';
import { ensureLocale } from '@/utils/paths';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params: { lng, slug } }) {
	const locale = ensureLocale(lng);
	const baseMetadata = buildPageMetadata({
		key: 'projects',
		lng: locale,
		path: `/projects/${slug}`,
	});

	const { t } = await loadTranslations(locale);
	const projects = t('home.projects.main-projects') || [];
	const project = projects.find((item) => item.slug === slug);

	if (!project) {
		return baseMetadata;
	}

	const description = project.description || baseMetadata.description;
	const title = `${project.title} | Esnaj Software`;
	const imageUrl = project.image
		? new URL(project.image, metadataBase).toString()
		: undefined;

	return {
		...baseMetadata,
		title,
		description,
		openGraph: {
			...baseMetadata.openGraph,
			title,
			description,
			images: imageUrl
				? [
					{
						url: imageUrl,
						alt: project.title,
					},
				]
				: baseMetadata.openGraph?.images,
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
	const projects = t('home.projects.main-projects') || [];
	const projectExists = projects.some((item) => item.slug === slug);

	if (!projectExists) {
		notFound();
	}

	return <ProjectMain lng={locale} slug={slug} />;
}
