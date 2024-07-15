'use client'
import React from 'react';
import Link from 'next/link';

function MobileNav({ isOpen, routes, lng, t }) {
	return (
		<nav
			className={`w-full h-full bg-white fixed top-24 left-0 py-12 px-6 flex flex-col gap-4 font-[300] text-4xl md:hidden transform ${
				isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
			} transition-transform duration-300 ease-in`}
		>
			{routes.slice(0, routes.length - 1).map((route, index) => (
				<Link
					key={index}
					href={`/${lng}/${route.link}`}
					className="hover:text-accent transition-opacity duration-300 ease-in-out"
				>
					{t(`routes.${route.name}`)}
				</Link>
			))}
		</nav>
	);
}

export default MobileNav;
