import React from 'react';
import Projects from '../components/Sections/Projects';
import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';
import { METADATA } from '@/utils/constants';

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	return {
		title: METADATA[`projects_${lng}`].title,
		description: METADATA[`projects_${lng}`].description,
		keywords: METADATA[`projects_${lng}`].keywords,
	};
}
export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <Projects lng={lng} />;
}
