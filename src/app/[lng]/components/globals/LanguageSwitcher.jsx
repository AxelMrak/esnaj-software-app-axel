'use client';

import Link from 'next/link';
import { languages } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n/client';
import { NetherlandsFlag, UKFlag } from './Icons/Flags';
import React from 'react';

const flags = {
	en: <UKFlag />,
	nl: <NetherlandsFlag />,
};

export const LanguageSwitcher = ({ lng }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const { t } = useTranslation(lng);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed bottom-4 right-4 w-max h-max flex flex-col gap-2">
			<button
				onClick={toggleDropdown}
				className="flex items-center gap-2 p-2 bg-white border border-gray-300 rounded-lg shadow-sm"
			>
				{React.cloneElement(flags[lng], {
					className: 'w-6 h-6',
				})}
				<span>{t(`languageSwitcher.options.${lng}`)}</span>
			</button>
			<div
				className={`${
					isOpen
						? 'max-h-max opacity-100 shadow-sm'
						: 'opacity-0 text-transparent h-0'
				} transition-all duration-300 ease-in-out overflow-hidden flex items-center gap-2 p-2 bg-white border border-gray-300 rounded-lg`}
			>
				{languages &&
					isOpen &&
					languages
						.filter((lang) => lang !== lng)
						.map((lang) => (
							<Link
								key={lang}
								className="flex items-center gap-2 hover:text-blue-500"
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
