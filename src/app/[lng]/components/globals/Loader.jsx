'use client';

import React from 'react';
import { Logo } from './Icons/Logo';

function Loader() {
	return (
		<div className="w-full h-screen max-h-screen flex flex-col items-center gap-6 justify-center">
			<Logo className="w-24 h-24 animate-pulse" />
		</div>
	);
}

export default Loader;
