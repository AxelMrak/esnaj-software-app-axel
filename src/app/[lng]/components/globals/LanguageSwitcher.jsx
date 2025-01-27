'use client';

import Link from 'next/link';
import { languages } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n/client';
import { NetherlandsFlag, UKFlag } from './Icons/Flags';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const flags = {
	"en": <UKFlag />,
	"nl": <NetherlandsFlag />,
};

export const LanguageSwitcher = ({ lng  }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation(lng);
	const router = useRouter();
	const currentLang = languages.includes(lng) ? lng : 'en';

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		if(!languages.includes(lng)) {
			router.replace('/en');
		}
	}, [lng, router]);

	return (
		<div className="fixed bottom-4 right-4 w-max h-max flex flex-col gap-2 z-50">
			<button
				id="language-switcher"
				aria-label="Language switcher"
				name="language-switcher"
				onClick={toggleDropdown}
				className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded-sm shadow-sm"
			>
				{React.cloneElement(flags[currentLang], {
					className: 'w-6 h-6',
				})}
				<span>{t(`languageSwitcher.options.${currentLang}`)}</span>
			</button>
			<div
				className={`${
					isOpen
						? 'max-h-max opacity-100 shadow-sm'
						: 'opacity-0 text-transparent h-0'
				} transition-all duration-300 ease-in-out overflow-hidden flex items-center gap-2 p-2 bg-white border border-gray-300 rounded-sm`}
			>
				{languages?.length &&
					languages
						.filter((lang) => lang !== lng)
						.map((lang) => (
							<Link
								key={lang}
								className="flex items-center gap-2 hover:text-accent"
								href={`/${lang}`}
								onClick={() => setIsOpen(false)}
							>
								{React.cloneElement(flags[lang], {
									className: 'w-6 h-6',
								})}
								{t(`languageSwitcher.options.${lang}`) || 'Language'}
							</Link>
						))}
			</div>
		</div>
	);
};
