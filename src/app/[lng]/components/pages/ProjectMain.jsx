'use client';
import { useTranslation } from '@/app/i18n/client';
import { projects } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';

function ProjectMain({ lng, slug }) {
	const { t } = useTranslation(lng);

	const project = projects.find((project) => project.link === slug);

	return (
		<main className="w-full h-full flex flex-col items-center justify-between">
			<div className="w-full h-[400px] flex items-center justify-center relative">
				<h1 className="text-4xl md:text-6xl font-light text-white underline decoration-accent absolute z-20">
					{project.title}
				</h1>
				<div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>
					<Image
						src={project.image}
						alt={project.name}
						layout="fill"
						objectFit="cover"
						className="grayscale"
					/>
				</div>
			</div>
			<div className="w-full h-full flex flex-col items-start gap-4 p-6">
				<p className="text-2xl font-extraLight">{project.description}</p>
				<p className="text-2xl font-extraLight">
					<span className="font-normal">
                        {t('project.what-we-did')}
                    </span>
					<ul className="list-disc list-inside mt-2">
						{project.whatWeDid.map((item) => (
							<li key={item.id} className="text-lg font-light">
								{item}
							</li>
						))}
					</ul>
				</p>
				<p className="text-2xl font-extraLight">
					<span className="font-normal">
                        {t('project.technologies')}
                    </span>
					<ul className="list-disc list-inside mt-2">
						{project.technologies.map((item) => (
							<li key={item.id} className="text-lg font-light">
								{item}
							</li>
						))}
					</ul>
				</p>
			</div>
		</main>
	);
}

export default ProjectMain;
