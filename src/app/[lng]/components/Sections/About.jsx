'use client'
import { useTranslation } from '@/app/i18n/client';
import React from 'react'
import TitleSection from '../globals/Sections/TitleSection';
import Image from 'next/image';

function About({
    lng
}) {

    const { t } = useTranslation(lng);

  return (
        <main className="w-full h-full flex flex-col items-center justify-between">
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
                        className='grayscale'
					/>
				</div>
			</div>  
            <div className="w-full h-full flex flex-col items-start gap-4 p-6">

                <p className="text-2xl font-light">{t('about.text')}</p>
                <p className="text-3xl font-normal">{t('about.team')}</p>
            </div>
    </main>

  )
}

export default About