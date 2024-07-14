import { routes } from '@/utils/routes';
import React from 'react';
import NavItem from './NavItem';
import Link from 'next/link';

function Nav({ lng }) {

	return (
		<nav className="flex-row items-center gap-4 font-[300] text-2xl hidden md:flex">
			{routes.slice(0, routes.length - 1).map((route, index) => (
				<NavItem key={index} label={route.name} href={route.link} lng={lng} />
			))}
		</nav>
	);
}

export default Nav;
