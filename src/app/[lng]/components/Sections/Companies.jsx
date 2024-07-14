import { partnersLogos } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';

function Companies() {
	return (
		<section className="w-full flex flex-row items-center gap-6 my-12 px-6">
			{partnersLogos.map((partner, index) => (
				<article
					key={index}
					className="w-1/6 h-32 relative text-gray-dark fill-current grayscale contrast-150  transition-all hover:grayscale-0 hover:contrast-100 "
				>
					<Image
						src={partner.logo}
						alt={partner.alt}
						layout="fill"
						objectFit="contain"
						objectPosition="center"
						className="cursor-pointer"
					/>
				</article>
			))}
		</section>
	);
}

export default Companies;
