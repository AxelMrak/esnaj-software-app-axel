import React from 'react';
import Contact from '../components/Sections/Contact';
import { useTranslation } from '@/app/i18n';
import About from '../components/Sections/About';

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <main className="w-full h-full flex flex-col items-center justify-between">
		<About lng={lng} />
		<Contact lng={lng} />
	</main>;
}
