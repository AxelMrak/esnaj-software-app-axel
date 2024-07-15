import React from 'react';
import Services from '../components/Sections/Services';
import Contact from '../components/Sections/Contact';
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return (
		<main className="w-full flex flex-col gap-6 2xl:mx-auto">
			<Services lng={lng} />
			<Contact lng={lng} />
		</main>
	);
}
