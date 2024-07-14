'use client'
import React from 'react';
import { Logo } from '../Icons/Logo';
import Nav from './Nav';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';
import { routes } from '@/utils/routes';

function Header({
	lng
}) {
	const {t} = useTranslation(lng);
	return (
		<header className="max-w-full sticky top-0 left-0 flex flex-row items-center justify-between p-4">
			<Logo width={40} height={40} />
			<Nav lng={lng} />
			<Link
				href={routes[routes.length - 1].link}
				className="border border-gray-500 rounded-md p-2"
			>
				{t(`routes.${routes[routes.length - 1].name}`)}
			</Link>
		</header>
	);
}

export default Header;
