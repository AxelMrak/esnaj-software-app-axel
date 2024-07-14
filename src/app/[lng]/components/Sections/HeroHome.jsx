'use client';
import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function HeroHome({ lng }) {
	const { t } = useTranslation(lng);
	const [wordsForHero, setWordsForHero] = useState(t('home.wordsHero'));
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFading(true);
			setTimeout(() => {
				setCurrentWordIndex(
					(prevIndex) => (prevIndex + 1) % wordsForHero.length
				);
				setIsFading(false);
			}, 1000);
		}, 3000);

		return () => clearInterval(interval);
	}, [wordsForHero]);

	useEffect(() => {
		if (t) {
			setWordsForHero(t('home.wordsHero'));
		} else {
			setWordsForHero(['Esnaj', 'Software', 'Development']);
		}
	}, [lng, t]);

	return (
		<section className="w-full h-[90vh] flex flex-row items-center justify-between">
			<article className="w-1/2 font-light h-full flex flex-col items-start justify-center gap-6 pl-20">
				<span
					className={`block transition-opacity duration-500 transform text-9xl font-light relative overflow-hidden ${
						isFading ? 'opacity-0 word-fade-out' : 'opacity-100 word-fade-in'
					}`}
				>
					{wordsForHero[currentWordIndex]}
				</span>
				<div className="flex flex-col gap-4">
					<hr className="w-full h-[3px] bg-accent" />
					<p className="text-7xl text-gray-dark font-extralight">
						Esnaj Software
					</p>
				</div>
			</article>
			<article
				className="w-1/2 h-full flex items-center justify-center  bg-fixed bg-right  bg-no-repeat bg-cover grayscale"
				style={{
					backgroundImage: 'url(/images/delft-image.webp)',

				}}
			/>
		</section>
	);
}

export default HeroHome;
