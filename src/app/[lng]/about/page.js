import React from 'react';
import Contact from '../components/Sections/Contact';
import { useTranslation } from '@/app/i18n';
import About from '../components/Sections/About';
import { languages } from '@/app/i18n/settings';
import { METADATA } from '@/utils/constants';

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	return {
		title: METADATA[`about_${lng}`].title,
		description: METADATA[`about_${lng}`].description,
		keywords: METADATA[`about_${lng}`].keywords,
	};
}

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <main className="w-full h-full flex flex-col items-center justify-between">
		<About lng={lng} />
		<Contact lng={lng} />
	</main>;
}
