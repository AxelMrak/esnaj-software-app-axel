import React from 'react';
import TitleSection from '../globals/Sections/TitleSection';
import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { featuredApps, getAppCopy } from '@/utils/apps';
import { buildLocalizedPath, ensureLocale } from '@/utils/paths';

async function Applications({ lng }) {
	const { t } = await useTranslation(lng);
	const locale = ensureLocale(lng);

	return (
		<section className="w-full flex flex-col items-start gap-12 py-4 px-4 md:px-12">
			<TitleSection
				title={t('home.apps.title')}
				text={t('home.apps.description')}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
				{featuredApps.map((app) => {
					const appCopy = getAppCopy(app, locale);
					const detailHref = `${buildLocalizedPath('/apps', lng)}#${app.slug}`;

					return (
						<article
							key={app.slug}
							className="w-full h-full border border-gray-dark rounded-sm shadow-sm p-6 flex flex-col gap-6"
						>
						<div className="flex items-start gap-4">
								<Image
										src={app.logo}
										alt={`${appCopy.name} logo`}
										width={64}
										height={64}
										className="h-16 w-16 object-contain"
									/>
									<div className="flex flex-col">
										<span className="text-sm uppercase tracking-wide text-gray-dark">
											{appCopy.name}
										</span>
										<p className="text-lg font-light text-gray-light">
											{appCopy.tagline}
										</p>
									</div>
						</div>
							<p className="text-xl font-light text-gray-dark">{appCopy.excerpt}</p>
							<ul className="space-y-2">
								{appCopy.features.slice(0, 3).map((feature) => (
									<li key={feature} className="flex items-start gap-2 text-base text-gray-dark">
										<span className="mt-1 block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
										<span className="font-light">{feature}</span>
									</li>
								))}
							</ul>
							<div className="mt-auto flex flex-col gap-3 sm:flex-row">
								<Link
									href={detailHref}
									className="inline-flex items-center justify-center rounded-sm border border-gray-dark px-4 py-2 text-lg font-light transition-colors hover:bg-gray-dark hover:text-white"
								>
									{t('home.apps.secondaryAction')}
								</Link>
								<a
									href={app.link}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center rounded-sm bg-gray-dark px-4 py-2 text-lg font-light text-white transition-colors hover:bg-gray-light hover:text-gray-dark"
								>
									{t('home.apps.primaryAction')}
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Applications;
