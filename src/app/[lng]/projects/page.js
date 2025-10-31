import React from 'react';
import Projects from '../components/Sections/Projects';
import { buildPageMetadata } from '@/utils/seo';

export async function generateMetadata({ params: { lng } }) {
	return buildPageMetadata({ key: 'projects', lng, path: '/projects' });
}
export default async function Page({ params: { lng } }) {
	return <Projects lng={lng} />;
}
