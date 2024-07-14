'use client';
import React from 'react';
import { Logo } from '../Icons/Logo';
import Nav from './Nav';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';
import { routes } from '@/utils/routes';

function Header({ lng }) {
	const { t } = useTranslation(lng);
	return (
		<header className="max-w-full sticky top-0 left-0 flex flex-row items-center justify-between p-6 bg-white z-50">
			<Logo width={70} height={70} />
			<Nav lng={lng} />
			<Link
				href={routes[routes.length - 1].link}
				className="border border-gray-300 bg-white shadow-sm rounded-sm p-2 text-2xl font-[300] transition-all hover:bg-gray-dark hover:text-white hover:border-transparent"
			>
				{t(`routes.${routes[routes.length - 1].name}`)}
			</Link>
		</header>
	);
}

export default Header;
