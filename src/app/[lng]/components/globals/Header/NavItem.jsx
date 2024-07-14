import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import React from 'react';

const formatPath = (path, lng) => {
	if (path === '/') return `/${lng}`;
	return `/${lng}${path}`;
};

function NavItem({ label, href, lng }) {
	const { t } = useTranslation(lng);

	return <Link href={formatPath(href, lng)}>{t(`routes.${label}`)}</Link>;
}

export default NavItem;
