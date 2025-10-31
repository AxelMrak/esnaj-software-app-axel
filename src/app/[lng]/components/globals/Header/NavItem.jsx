import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import React from 'react';
import { buildLocalizedPath } from '@/utils/paths';

function NavItem({ label, href, lng }) {
	const { t } = useTranslation(lng);

	return (
		<Link href={buildLocalizedPath(href, lng)}>
			{t(`routes.${label}`)}
		</Link>
	);
}

export default NavItem;
