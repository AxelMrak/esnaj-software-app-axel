import Link from 'next/link';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './components/globals/LanguageSwitcher';
import HeroHome from './components/Sections/HeroHome';
import Companies from './components/Sections/Companies';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';

export default async function Page({ params: { lng } }) {
	
	const { t } = await useTranslation(lng);

	return <main className='w-full flex flex-col grap-6'>
		<HeroHome lng={lng} />
		<Companies />
		<Services lng={lng} />
		<Projects lng={lng} />
	</main>;
}
