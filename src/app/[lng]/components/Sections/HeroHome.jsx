'use client';
import { useTranslation } from '@/app/i18n/client';
import { heroWords } from '@/utils/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function HeroHome({ lng }) {
	 const { t } = useTranslation(lng);
	// const [wordsForHero, setWordsForHero] = useState(heroWords);
	// const [currentWordIndex, setCurrentWordIndex] = useState(0);
	// const [isFading, setIsFading] = useState(false);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setIsFading(true);
	// 		setTimeout(() => {
	// 			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % heroWords.length);
	// 			setIsFading(false);
	// 		}, 1000);
	// 	}, 3000);

	// 	return () => clearInterval(interval);
	// }, [heroWords]);
	// isFading ? 'opacity-0 word-fade-out' : 'opacity-100 word-fade-in'
	return (
		<section className="w-full h-[90vh] flex flex-col gap-6 md:flex-row md:gap-12 items-center justify-between">
			<article className="w-full md:w-1/2 font-light h-full flex flex-col items-start justify-center gap-6 pl-12 md:pl-20">
				<span
					className={`block transition-opacity duration-500 transform text-7xl md:text-8xl font-light relative overflow-hidden 
					`}
				>
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
				className="w-full md:w-3/4 h-full bg-left bg-cover md:bg-contain bg-no-repeat"
				style={{ backgroundImage: 'url(/images/hero-image.webp)' }}
			/>
		</section>
	);
}

export default HeroHome;
