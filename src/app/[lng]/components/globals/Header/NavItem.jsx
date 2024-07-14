import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import React from 'react';

function NavItem({ label, href, lng }) {
	const { t } = useTranslation(lng);

	return <Link href={href}>{t(`routes.${label}`)}</Link>;
}

export default NavItem;
