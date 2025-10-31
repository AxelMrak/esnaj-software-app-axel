import React from 'react';
import Contact from '../components/Sections/Contact';
import { buildPageMetadata } from '@/utils/seo';

export async function generateMetadata({ params: { lng } }) {
	return buildPageMetadata({ key: 'contact', lng, path: '/contact' });
}
export default async function Page({ params: { lng } }) {
	return <Contact lng={lng} />;
}
