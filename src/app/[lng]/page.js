import HeroHome from './components/Sections/HeroHome';
import Companies from './components/Sections/Companies';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import { buildPageMetadata } from '@/utils/seo';

export async function generateMetadata({ params: { lng } }) {
	return buildPageMetadata({ key: 'home', lng });
}


export default function Page({ params: { lng } }) {
	return (
		<main className="w-full 2xl:mx-auto">
			<HeroHome lng={lng} />
			<div className="w-full flex flex-col gap-12 px-6 2xl:mx-auto">
				<Companies />
				<Services lng={lng} />
				<Projects lng={lng} />
				<Contact lng={lng} />
			</div>
		</main>
	);
}
