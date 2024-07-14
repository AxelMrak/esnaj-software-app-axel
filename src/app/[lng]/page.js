import Link from 'next/link';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './components/globals/LanguageSwitcher';
import HeroHome from './components/Sections/HeroHome';

export async function generateMetadata({ params: { lng } }) {
	const { t } = await useTranslation(lng);
	return { title: t('h1') };
}

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);

	return <main>
		<HeroHome />
	</main>;
}
