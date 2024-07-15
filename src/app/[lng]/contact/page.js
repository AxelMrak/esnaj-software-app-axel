import React from 'react';
import Contact from '../components/Sections/Contact';
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return <Contact lng={lng} />;
}
