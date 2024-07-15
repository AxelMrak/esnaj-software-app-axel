'use client'
import React from 'react'
import TitleSection from '../globals/Sections/TitleSection'
import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import { ArrowIcon } from '../globals/Icons/UI';

function Contact({
    lng
}) {
    const { t } = useTranslation(lng);
  return (
		<section className="w-[90%] flex flex-col gap-6 p-6 m-12 border border-gray-light rounded-sm shadow-sm mx-auto">
			<TitleSection
				title={t('home.contact.title')}
				text={t('home.contact.description')}
			/>
			<Link 
            href={'mailto:info@esnajsoftware.com'}
            className="w-max p-4 bg-gray-dark text-white font-normal text-2xl rounded-sm flex flex-row items-center gap-6 transition-all hover:bg-white hover:text-gray-dark hover:fill-text-gray-dark hover:border hover:border-gray-dark">
				{t('home.contact.button')}
                <ArrowIcon className="w-6 h-6 fill-current rotate-180" />
			</Link>
		</section>
	);
}

export default Contact