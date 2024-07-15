import './globals.css';
import localFont from 'next/font/local';

import { dir } from 'i18next';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { LanguageSwitcher } from './components/globals/LanguageSwitcher';
import Header from './components/globals/Header';
import { BreakpointsProvider } from '@/context/BreakpointsContext';
import { Suspense } from 'react';
import Footer from './components/globals/Footer';

const ClashGrotesk = localFont({
	src: '../../fonts/ClashGrotesk-Variable.woff2',
	display: 'swap',
});

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

// TODO: FIX METADATA
// export async function generateMetadata({ params: { lng } }) {
// 	if (languages.indexOf(lng) < 0) lng = fallbackLng;
// 	const { t } = await useTranslation(lng);
// 	return {
// 		title: t('title'),
// 		content:
// 			'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.',
// 	};
// }

export default function RootLayout({ children, params: { lng } }) {
	return (
		<html lang={lng} dir={dir(lng)} className={ClashGrotesk.className}>
			<head />
			<body>
				<Suspense fallback="Loading...">
					<BreakpointsProvider>
						<Header lng={lng} />
						{children}
						<LanguageSwitcher lng={lng} />
						<Footer lng={lng} />
					</BreakpointsProvider>
				</Suspense>
			</body>
		</html>
	);
}
