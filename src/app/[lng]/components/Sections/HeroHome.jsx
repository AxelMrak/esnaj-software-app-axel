import Image from 'next/image';
import React from 'react';

function HeroHome() {
	return (
		<section className="w-full h-[80vh] flex flex-row items-center justify-between">
			<article className="w-1/2 font-light h-full flex flex-col items-start justify-center gap-6 pl-12">
				<div className="flex flex-col gap-2">
					<h1 className="text-8xl font-light">Quality</h1>
					<hr className="w-full h-1 bg-accent" />
				</div>

				<p className="text-6xl text-gray-dark font-extralight">
					Esnaj Software
				</p>
			</article>
			<article className="w-1/2 h-full flex items-center justify-center relative">
				<Image
					src="/images/delft-image.webp"
					alt="Hero Home"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="grayscale"
				/>
			</article>
		</section>
	);
}

export default HeroHome;
