'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Logo } from './[lng]/components/globals/Icons/Logo';

export default  function Custom404() {
	const router = useRouter();

	useEffect(() => {
		window.location.pathname === '/' && router.replace('/en');
	}, [router]);

	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<Logo width={100} height={100} />
			<h1 className="text-4xl font-bold">404</h1>
		</main>
	);
}
