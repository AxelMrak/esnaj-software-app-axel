import React from 'react';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import { buildPageMetadata } from '@/utils/seo';

export async function generateMetadata({ params: { lng } }) {
	return buildPageMetadata({ key: 'about', lng, path: '/about' });
}

export default function Page({ params: { lng } }) {
	return <main className="w-full h-full flex flex-col items-center justify-between">
		<About lng={lng} />
		<Contact lng={lng} />
	</main>;
}
