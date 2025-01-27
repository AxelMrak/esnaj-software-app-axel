'use client';
import React, { useRef, useState } from 'react';
import TitleSection from '../globals/Sections/TitleSection';
import { useTranslation } from '@/app/i18n/client';
import { projects } from '@/utils/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { ArrowIcon } from '../globals/Icons/UI';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import { useBreakpoints } from '@/context/BreakpointsContext';


function Projects({ lng }) {
	const { isMobile, isTablet, isDesktop } = useBreakpoints();

	const getSlidesPerView = () => {
        if(isDesktop) return 3;
        if(isTablet) return 2;
		if (isMobile) return 1;
		return 2;
	};

	const { t } = useTranslation(lng);
	const swiperRef = useRef();
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const [viewAll, setViewAll] = useState(false);

	const handleViewAll = () => {
		setViewAll(!viewAll);
	};

	return (
		<section className="w-full h-full flex flex-col items-start gap-12 py-4 px-4 md:px-12">
			<TitleSection
				title={t('home.projects.title')}
				text={t('home.projects.description')}
			/>
			<div className="w-full h-full flex flex-row items-center justify-between">
				<button
					name='view-all-projects'
					id="view-all-projects"
					aria-label='View all projects'
					onClick={handleViewAll}
					className="text-2xl font-light border border-gray-light p-2 rounded-sm shadow-sm"
				>
					{viewAll
						? t('home.projects.button-view-less')
						: t('home.projects.button-view-all')}
				</button>
				{!viewAll && (
					<div className="flex flex-row items-center gap-4">
						<button
							aria-label='Previous slide'
							id="previous-slide"
							name='previous-slide'
							onClick={() => swiperRef.current.slidePrev()}
							className="text-2xl font-light border border-gray-dark rounded-full p-2 transition-transform hover:fill-gray-light  disabled:opacity-20"
							disabled={isBeginning}
						>
							<ArrowIcon className="fill-gray-dark w-8 h-8" />
						</button>
						<button
							aria-label='Next slide'
							id="next-slide"
							name='next-slide'
							onClick={() => swiperRef.current.slideNext()}
							className="text-2xl font-light border border-gray-dark rounded-full p-2 transition-transform hover:fill-gray-light  disabled:opacity-20"
							disabled={isEnd}
						>
							<ArrowIcon className="fill-gray-dark w-8 h-8 rotate-180" />
						</button>
					</div>
				)}
			</div>
			{viewAll ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{
						t('home.projects.main-projects') &&
						t('home.projects.main-projects').map((project, index) => (
							
						<div key={index} className="flex flex-col items-start gap-4">
			
							<div className="relative h-60 w-full rounded-sm">
								<Image
									src={project.image}
									alt={project.title}
									layout="fill"
									objectFit="cover"
									className="rounded-sm absolute top-0 left-0"
								/>
							</div>
							<div className="w-full flex flex-col items-start gap-2 mt-6">
								<h3 className="text-2xl font-normal">{project.title}</h3>
								<Link
									href={`/${lng}/projects/${project.slug}`}
									className="underline text-xl font-light decoration-accent"
								>
									{t('home.projects.know-more')}
								</Link>
							</div>
						</div>
					))}
				</div>
			) : (
				<Swiper
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					onSlideChange={(swiper) => {
						setIsBeginning(swiper.isBeginning);
						setIsEnd(swiper.isEnd);
					}}
					className="w-full flex items-start"
					spaceBetween={50}
					slidesPerView={getSlidesPerView()}
					draggable={true}
				>
					{
						t('home.projects.main-projects') &&
						t('home.projects.main-projects').map((project, index) => (
						<SwiperSlide key={index}>
							<div className="relative h-60 w-full rounded-sm">
								<Image
									src={project.image}
									alt={project.title}
									layout="fill"
									objectFit="cover"
									className="rounded-sm absolute top-0 left-0"
								/>
							</div>
							<div className="w-full flex flex-col items-start gap-2 mt-6">
								<h3 className="text-2xl font-normal">{project.title}</h3>
								<Link
									href={`/${lng}/projects/${project.slug}`}
									className="underline text-xl font-light decoration-accent"
								>
									{t('home.projects.know-more')}
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</section>
	);
}

export default Projects;
