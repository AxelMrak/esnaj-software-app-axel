import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import React from 'react';

async function HeroHome({ lng }) {
	const { t } = await useTranslation(lng);
	return (
		<section className="w-full h-screen md:h-[85vh] flex flex-col md:flex-row md:gap-12 items-center justify-between relative">
			<article className="w-full md:w-1/2 font-light h-full flex flex-col items-start justify-center gap-6 pl-6 md:pl-20">
				<span className="block transition-opacity duration-500 transform text-7xl font-light relative overflow-hidden">
					Esnaj Software
				</span>
				<hr className="w-10/12 h-[3px] bg-accent" />
				<div className="flex flex-col gap-4">
					<h1 className="w-10/12 text-2xl md:text-xl text-gray-dark font-light">
						{t('home.hero.description')}
					</h1>
				</div>
			</article>
			<article className="w-full md:w-1/2 h-full flex items-center justify-center relative">
				<Image
					priority
					src="/images/hero-image.webp"
					alt="Hero Home"
					layout="fill"
					objectFit="contain"
					className="grayscale"
				/>
			</article>
		</section>
	);
}

export default HeroHome;
