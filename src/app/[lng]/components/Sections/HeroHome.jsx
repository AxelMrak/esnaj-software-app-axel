'use client';
import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';
import React from 'react';

function HeroHome({ lng }) {
	const { t } = useTranslation(lng);

	return (
		<section className="w-full h-screen md:h-[90vh] mt-6 sm:mt-0 flex flex-col md:flex-row md:gap-12 items-center justify-between">
			<article className="w-full md:w-1/2 font-light h-full flex flex-col items-start justify-center gap-6 pl-6 md:pl-20">
				<span className="block transition-opacity duration-500 transform text-7xl md:text-8xl font-light relative overflow-hidden">
					Esnaj Software
				</span>
				<hr className="w-10/12 h-[3px] bg-accent" />
				<div className="flex flex-col gap-4">
					<h1 className="w-10/12 text-2xl md:text-xl text-gray-dark font-light">
						{t('home.hero.description')}
					</h1>
				</div>
			</article>
			<article
				className="w-full md:w-3/4 h-full bg-center bg-contain sm:bg-cover md:bg-contain bg-no-repeat grayscale"
				style={{ backgroundImage: 'url(/images/hero-image.webp)' }}
			/>
		</section>
	);
}

export default HeroHome;
