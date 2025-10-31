import React from 'react';
import { metadataBase } from '@/utils/seo';

export const metadata = {
	metadataBase,
};

function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
}

export default RootLayout;
