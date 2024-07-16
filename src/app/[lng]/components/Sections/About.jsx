'use client';
import { useTranslation } from '@/app/i18n/client';
import React from 'react';
import TitleSection from '../globals/Sections/TitleSection';
import Image from 'next/image';
import { team } from '@/utils/constants';

function About({ lng }) {
	const { t } = useTranslation(lng);

	return (
		<main className="w-full h-full flex flex-col gap-12 items-center justify-between">
			<div className="w-full h-[400px] flex items-center justify-center relative">
				<h1 className="text-4xl md:text-6xl font-light text-white underline decoration-accent absolute z-20">
					{t('about.title')}
				</h1>
				<div className="w-full h-full relative">
					<div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>
					<Image
						src="/images/delft-image.webp"
						alt="Delft"
						layout="fill"
						objectFit="cover"
						className="grayscale"
					/>
				</div>
			</div>
			<div className="w-full h-full flex flex-col items-start gap-12 p-6">
				<p className="text-3xl font-light">{t('about.text')}</p>
				<div className="w-full flex flex-col items-start gap-8">
					<p className="text-4xl font-normal">{t('about.team')}</p>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
						{
							t("about.team-members") &&
							t("about.team-members").map((member) => (
							<div key={member.id} className="w-full flex flex-col items-center justify-center gap-4 border border-gray-200 shadow-sm rounded-sm py-6">
								<Image
									src={member.image}
									alt={member.name}
									width={200}
									height={200}
									className="rounded-full border border-gray-100"
								/>
								<h2 className="text-2xl font-normal text-center underline decoration-gray-light">
									{member.name}
								</h2>
								<p className="text-xl font-light">
									{member.role}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default About;
