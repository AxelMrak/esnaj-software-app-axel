import {
	BackendIcon,
	ConsultingIcon,
	DatabaseIcon,
	DesignIcon,
	DevelopmentIcon,
	FrontendIcon,
	HostingIcon,
	IntegrationIcon,
	MobileIcon,
} from '@/app/[lng]/components/globals/Icons/Services';
import i18next from 'i18next';

const getTranslation = (key) => {
	return i18next.t(key);
};

i18next.on('languageChanged', () => {
	mainServices.forEach((service) => {
		service.name = getTranslation(service.translationKeys.name);
		service.description = getTranslation(service.translationKeys.description);
	});
	otherServices.forEach((service) => {
		service.name = getTranslation(service.translationKeys.name);
		service.description = getTranslation(service.translationKeys.description);
	});
});

export const partnersLogos = [
	{
		logo: './logos/cgi.svg',
		alt: 'CGI',
	},
	{
		logo: './logos/engie.svg',
		alt: 'Engie',
	},
	{
		logo: './logos/erasmus.svg',
		alt: 'Erasmus',
	},
	{
		logo: './logos/facilicom.svg',
		alt: 'Facilicom',
	},
	{
		logo: './logos/port-rotterdam.svg',
		alt: 'Port of Rotterdam',
	},
	{
		logo: './logos/rotterdam-logo.svg',
		alt: 'Rotterdam',
	},
	{
		logo: './logos/svides.svg',
		alt: 'Svides',
	},
	{
		logo: './logos/tudelft.svg',
		alt: 'TU Delft',
	},
	{
		logo: './logos/vanOord.svg',
		alt: 'Van Oord',
	},
	{
		logo: './logos/vopak.svg',
		alt: 'Vopak',
	},
];

export const heroWords = ['Esnaj', 'Software'];

export const mainServices = [
	{
		id: 1,
		translationKeys: {
			name: 'home.services.main-services.full-stack-development.name',
			description:
				'home.services.main-services.full-stack-development.description',
		},
		name: getTranslation(
			'home.services.main-services.full-stack-development.name'
		),
		description: getTranslation(
			'home.services.main-services.full-stack-development.description'
		),
		link: 'full-stack-development',
		icon: <DevelopmentIcon />,
	},
	{
		id: 2,
		translationKeys: {
			name: 'home.services.main-services.consulting.name',
			description: 'home.services.main-services.consulting.description',
		},
		name: getTranslation('home.services.main-services.consulting.name'),
		description: getTranslation(
			'home.services.main-services.consulting.description'
		),
		link: 'consulting',
		icon: <ConsultingIcon />,
	},
	{
		id: 3,
		translationKeys: {
			name: 'home.services.main-services.api-integration.name',
			description: 'home.services.main-services.api-integration.description',
		},
		name: getTranslation('home.services.main-services.api-integration.name'),
		description: getTranslation(
			'home.services.main-services.api-integration.description'
		),
		link: 'api-integration',
		icon: <IntegrationIcon />,
	},
];

export const otherServices = [
	{
		id: 1,
		translationKeys: {
			name: 'home.services.other-services.backend.name',
			description: 'home.services.other-services.backend.description',
		},
		name: getTranslation('home.services.other-services.backend.name'),
		description: getTranslation(
			'home.services.other-services.backend.description'
		),
		icon: <BackendIcon />,
	},
	{
		id: 2,
		translationKeys: {
			name: 'home.services.other-services.hosting.name',
			description: 'home.services.other-services.hosting.description',
		},
		name: getTranslation('home.services.other-services.hosting.name'),
		description: getTranslation(
			'home.services.other-services.hosting.description'
		),
		icon: <HostingIcon />,
	},
	{
		id: 3,
		translationKeys: {
			name: 'home.services.other-services.frontend.name',
			description: 'home.services.other-services.frontend.description',
		},
		name: getTranslation('home.services.other-services.frontend.name'),
		description: getTranslation(
			'home.services.other-services.frontend.description'
		),
		icon: <FrontendIcon />,
	},
	{
		id: 4,
		translationKeys: {
			name: 'home.services.other-services.database.name',
			description: 'home.services.other-services.database.description',
		},
		name: getTranslation('home.services.other-services.database.name'),
		description: getTranslation(
			'home.services.other-services.database.description'
		),
		icon: <DatabaseIcon />,
	},
	{
		id: 5,
		translationKeys: {
			name: 'home.services.other-services.mobile.name',
			description: 'home.services.other-services.mobile.description',
		},
		name: getTranslation('home.services.other-services.mobile.name'),
		description: getTranslation(
			'home.services.other-services.mobile.description'
		),
		icon: <MobileIcon />,
	},
	{
		id: 6,
		translationKeys: {
			name: 'home.services.other-services.design.name',
			description: 'home.services.other-services.design.description',
		},
		name: getTranslation('home.services.other-services.design.name'),
		description: getTranslation(
			'home.services.other-services.design.description'
		),
		icon: <DesignIcon />,
	},
];

export const projects = [
	{
		id: 1,
		title: 'Career Portal Aruba',
		description: 'Description of project 1',
		link: 'career-portal-aruba',
		image: '/images/projects/cpa-img.webp',
	},
	{
		id: 2,
		title: 'Pfister Weighbridge',
		description: 'Description of project 2',
		link: 'pfister-weighbridge',
		image: '/images/projects/pfister-image.webp',
	},
	{
		id: 3,
		title: 'RocketX',
		description: 'Description of project 3',
		link: 'rocketx',
		image: '/images/projects/rocketX-image.webp',
	},
	{
		id: 4,
		title: 'Haven van Rotterdam',
		description: 'Description of project 4',
		link: 'haven-van-rotterdam',
		image: '/images/projects/haven-image.webp',
	},
	{
		id: 5,
		title: 'Briqwise',
		description: 'Description of project 5',
		link: 'briqwise',
		image: '/images/projects/briqwise-image.webp',
	},
	{
		id: 6,
		title: 'IJsbier Steenwijk',
		description: 'Description of project 6',
		link: 'ijsbier-steenwijk',
		image: '/images/projects/IJsbier-image.webp',
	},
];
