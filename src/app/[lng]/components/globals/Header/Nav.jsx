import { routes } from '@/utils/routes';
import React from 'react';
import NavItem from './NavItem';
import Link from 'next/link';

function Nav({ lng }) {

	return (
		<nav className="flex flex-row items-center gap-4">
			{routes.slice(0, routes.length - 1).map((route, index) => (
				<NavItem key={index} label={route.name} href={route.link} lng={lng} />
			))}
		</nav>
	);
}

export default Nav;
