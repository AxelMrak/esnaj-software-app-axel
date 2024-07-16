import React from 'react';
import Services from '../components/Sections/Services';
import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';
import { METADATA } from '@/utils/constants';

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	return {
		title: METADATA[`services_${lng}`].title,
		description: METADATA[`services_${lng}`].description,
		keywords: METADATA[`services_${lng}`].keywords,
	};
}
export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <Services lng={lng} />;
}
