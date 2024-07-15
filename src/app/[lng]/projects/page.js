import React from 'react';
import Projects from '../components/Sections/Projects';
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng } }) {
    const { t } = await useTranslation(lng);
	return <Projects lng={lng} />;
}
