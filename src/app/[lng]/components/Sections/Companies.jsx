'use client';
import { partnersLogos } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Autoplay } from 'swiper/modules';
import { useBreakpoints } from '@/context/BreakpointsContext';

function Companies() {
	const { isMobile, isTablet, isDesktop } = useBreakpoints();

	const getSlidesPerView = () => {
		if (isMobile) return 2;
		if (isTablet) return 4;
		if (isDesktop) return 6;
		return 6;
	};

	return (
		<section className="w-full h-32 my-16 px-8">
			<Swiper
				modules={[ A11y, Autoplay]}
				spaceBetween={40}
				slidesPerView={getSlidesPerView()}
				loop={true}
				autoplay={{ delay: 2500 }}
				className="w-full h-full"
			>
				{partnersLogos.map((partner, index) => (
					<SwiperSlide
						key={index}
						className="w-1/6 h-32 relative text-gray-dark fill-current grayscale contrast-150 transition-all hover:grayscale-0 hover:contrast-100"
					>
						<Image
							src={partner.logo}
							alt={partner.alt}
							layout="fill"
							objectFit="contain"
							objectPosition="center"
							className="cursor-pointer"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Companies;
