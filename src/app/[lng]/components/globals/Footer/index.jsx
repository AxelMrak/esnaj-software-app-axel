'use client';
import React from 'react';
import { Logo } from '../Icons/Logo';
import { useTranslation } from '@/app/i18n/client';
import { routes } from '@/utils/routes';
import Link from 'next/link';
import { LinkedInIcon } from '../Icons/UI';

function Footer({ lng }) {
	const { t } = useTranslation(lng);

	return (
		<footer className="w-full h-max flex flex-col items-start md:flex-row md:items-center justify-between p-4 border-t border-gray-dark mt-6">
			<div className="w-1/3 flex flex-row flex-wrap items-center gap-4 p-4">
				<Logo className="w-28  h-28 " />
				<div className="flex flex-col gap-2">
					<p className="text-3xl font-normal text-gray-dark line-clamp-2">
						{t('home.misc.nl')}
					</p>
					<p className="text-xl font-light">
						Esnaj Software © {new Date().getFullYear()}
					</p>
				</div>
			</div>
			<div className="w-1/3 flex flex-col items-start gap-4 p-4">
				<Link
					href="https://www.linkedin.com/company/esnaj-software/"
					className=" text-gray-dark hover:text-gray-light transition-all"
				>
					<LinkedInIcon className="w-12 h-12 fill-current" />
				</Link>
				<Link
					href="mailto:info@esnajsoftware.com"
					className="text-2xl font-normal text-gray-dark underline hover:text-gray-light transition-all"
				>
					info@esnajsoftware.com
				</Link>
				<Link
					href="tel:+31638618890"
					className="text-2xl font-normal text-gray-dark underline hover:text-gray-light transition-all"
				>
					+31638618890
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
