import React from 'react';
import Services from '../components/Sections/Services';
import Contact from '../components/Sections/Contact';
import { useTranslation } from '@/app/i18n';
import About from '../components/Sections/About';

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <About lng={lng} />;
}
