import React from 'react';
import Contact from '../components/Sections/Contact';
import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';
import { METADATA } from '@/utils/constants';

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	return {
		title: METADATA[`contact_${lng}`].title,
		description: METADATA[`contact_${lng}`].description,
		keywords: METADATA[`contact_${lng}`].keywords,
	};
}
export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <Contact lng={lng} />;
}
