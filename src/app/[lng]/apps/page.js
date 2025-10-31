import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buildPageMetadata } from '@/utils/seo';
import { featuredApps, getAppCopy } from '@/utils/apps';
import { ensureLocale, buildLocalizedPath } from '@/utils/paths';
import { useTranslation } from '@/app/i18n';

export async function generateMetadata({ params: { lng } }) {
	const locale = ensureLocale(lng);
	const baseMetadata = buildPageMetadata({ key: 'apps', lng: locale, path: '/apps' });
	const baseKeywords = baseMetadata.keywords
		? baseMetadata.keywords.split(',').map((keyword) => keyword.trim())
		: [];

	const combinedKeywords = Array.from(
		new Set([
			...baseKeywords,
			...featuredApps.flatMap((app) => app.keywords),
		])
	).filter(Boolean);

	return {
		...baseMetadata,
		keywords: combinedKeywords.join(', '),
	};
}

export default async function AppsPage({ params: { lng } }) {
	const locale = ensureLocale(lng);
	const { t } = await useTranslation(locale);
	const contactHref = buildLocalizedPath('/contact', locale);

	return (
		<main className="flex w-full flex-col gap-16 px-6 py-12 2xl:mx-auto">
			<section className="flex flex-col gap-4">
				<h1 className="text-4xl font-normal md:text-5xl">
					{t('appsPage.title')}
				</h1>
				<p className="max-w-3xl text-2xl font-light text-gray-dark">
					{t('appsPage.intro')}
				</p>
			</section>
			<section className="flex flex-col gap-16">
				{featuredApps.map((app) => {
					const appCopy = getAppCopy(app, locale);

					return (
						<article
							key={app.slug}
							id={app.slug}
							className="flex flex-col gap-8 rounded-sm border border-gray-dark p-6 shadow-sm"
						>
							<header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div className="flex items-center gap-4">
									<Image
										src={app.logo}
										alt={`${appCopy.name} logo`}
										width={80}
										height={80}
										className="h-20 w-20 object-contain"
									/>
									<div className="flex flex-col">
										<h2 className="text-3xl font-normal">{appCopy.name}</h2>
										<p className="text-xl font-light text-gray-light">
											{appCopy.tagline}
										</p>
									</div>
								</div>
							</header>
							<div className="grid gap-8 md:grid-cols-[2fr,1fr]">
								<div className="flex flex-col gap-6">
									<section className="flex flex-col gap-2">
										<h3 className="text-2xl font-normal">
											{t('appsPage.labels.overview')}
										</h3>
										<p className="text-xl font-light text-gray-dark">
											{appCopy.overview}
										</p>
									</section>
									<section className="flex flex-col gap-2">
										<h3 className="text-2xl font-normal">
											{t('appsPage.labels.features')}
										</h3>
										<ul className="space-y-2">
											{appCopy.features.map((feature) => (
												<li key={feature} className="flex items-start gap-3 text-base text-gray-dark">
													<span className="mt-1 block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
													<span className="font-light">{feature}</span>
												</li>
											))}
										</ul>
									</section>
								</div>
								<section className="flex flex-col gap-4 rounded-sm border border-gray-light p-4">
									<h3 className="text-xl font-normal">
										{t('appsPage.labels.idealFor')}
									</h3>
									<p className="text-base font-light text-gray-dark">
										{appCopy.idealFor}
									</p>
								</section>
							</div>
							<footer className="flex flex-col gap-3 md:flex-row">
								<a
									href={app.link}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center rounded-sm bg-gray-dark px-4 py-2 text-lg font-light text-white transition-colors hover:bg-gray-light hover:text-gray-dark"
								>
									{t('appsPage.primaryAction')}
								</a>
								<Link
									href={contactHref}
									className="inline-flex items-center justify-center rounded-sm border border-gray-dark px-4 py-2 text-lg font-light transition-colors hover:bg-gray-dark hover:text-white"
								>
									{t('appsPage.secondaryAction')}
								</Link>
							</footer>
							<p className="sr-only">{app.keywords.join(', ')}</p>
						</article>
					);
				})}
			</section>
		</main>
	);
}
