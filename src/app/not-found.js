'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Logo } from './[lng]/components/globals/Icons/Logo';

export default  function Custom404() {
	const router = useRouter();

	useEffect(() => {
		router.replace('/en');
	}, [router]);

	return (
		<main className="w-full flex flex-col items-center justify-center h-screen">
			<Logo width={300} height={300} />
			<h1 className="text-6xl font-light">404</h1>

		</main>
	);
}
