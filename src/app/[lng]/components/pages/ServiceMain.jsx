'use client';
import { useTranslation } from '@/app/i18n/client';
import { mainServices } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';
import Contact from '../Sections/Contact';
import { renderIconService } from '@/utils/render';

function ServiceMain({ lng, slug }) {
	const { t } = useTranslation(lng);

	const service = t('home.services.main-services').find((service) => service.slug === slug);

	return (
		<main className="w-full min-h-screen flex flex-col gap-6 p-6 2xl:mx-auto">
			<div className="w-full h-full flex flex-col gap-8 justify-center items-start">
				{React.cloneElement(renderIconService(service.slug), {
					className: 'w-20 h-20 fill-gray-light',
				})}
				<h1 className="text-4xl md:text-5xl font-normal underline decoration-accent">
					{service.name}
				</h1>
				<div className="w-full flex flex-col items-start gap-2">
					<p className="text-2xl font-extraLight">{service['long-description']}</p>
					{service.itemsExtra &&
						service.itemsExtra.map((item) => (
							<p key={item.id} className="text-2xl font-extraLight">
								<span className="font-normal">{item.name}: </span>
								{item.text}
							</p>
						))}
				</div>
			</div>
			<Contact lng={lng} />
		</main>
	);
}

export default ServiceMain;
