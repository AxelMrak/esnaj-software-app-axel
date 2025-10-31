import React from 'react';
import Services from '../components/Sections/Services';
import { buildPageMetadata } from '@/utils/seo';

export async function generateMetadata({ params: { lng } }) {
	return buildPageMetadata({ key: 'services', lng, path: '/services' });
}
export default async function Page({ params: { lng } }) {
	return <Services lng={lng} />;
}
