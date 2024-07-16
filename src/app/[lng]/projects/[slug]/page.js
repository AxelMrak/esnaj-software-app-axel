import React from 'react';
import ProjectMain from '../../components/pages/ProjectMain';
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
export default function Page({ params: { lng, slug } }) {
	return <ProjectMain lng={lng} slug={slug} />;
}
