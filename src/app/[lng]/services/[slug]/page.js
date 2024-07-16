import React from 'react';
import ServiceMain from '../../components/pages/ServiceMain';
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
export default function Page({ params: { lng, slug } }) {
	return <ServiceMain lng={lng} slug={slug} />;
}
