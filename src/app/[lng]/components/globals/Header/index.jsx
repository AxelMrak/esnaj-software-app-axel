'use client';
import React, { useEffect } from 'react';
import { Logo } from '../Icons/Logo';
import Nav from './Nav';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';
import { routes } from '@/utils/routes';
import MobileNav from './MobileNav';
import MenuToggle from './MenuToggle.';
import { useRouter } from 'next/navigation';

function Header({ lng }) {
	const { t } = useTranslation(lng);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const handleClickLinkMobile = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="max-w-full sticky top-0 left-0 flex flex-row items-center justify-between p-6 bg-white z-50">
			<Link href={`/${lng}`}>
				<Logo width={70} height={70} />
			</Link>
			<Nav lng={lng} />
			<MobileNav
				isOpen={isMenuOpen}
				close={handleClickLinkMobile}
				routes={routes}
				lng={lng}
				t={t}
			/>
			<div className="flex flex-row items-center gap-4">
				<Link
					href={`/${lng}/${routes[routes.length - 1].name}`}
					className="border border-gray-300 bg-white shadow-sm rounded-sm p-2 text-2xl font-[300] transition-all hover:bg-gray-dark hover:text-white hover:border-transparent"
				>
					{t(`routes.${routes[routes.length - 1].name}`)}
				</Link>
				<MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			</div>
		</header>
	);
}

export default Header;
