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
		name: 'Full Stack Development',
		description:
			'Get your business idea to life from start to finish using the latest technologies.',
		link: 'full-stack-development',
		icon: <DevelopmentIcon />,
	},
	{
		id: 2,
		name: 'Consulting',
		description:
			'We will aid you in the process of tackling the hardest software problems you can face.',
		link: 'consulting',
		icon: <ConsultingIcon />,
	},
	{
		id: 3,
		name: 'API Integration',
		description:
			'We help make your software solutions communicate and integrate in the most efficient way possible.',
		link: 'api-integration',
		icon: <IntegrationIcon />,
	},
];

export const otherServices = [
	{
		id: 1,
		name: 'Backend App Development',
		description:
			'We code an integratable, extendable and modular back end that will fluently integrate with your app.',
		icon: <BackendIcon />,
	},
	{
		id: 2,
		name: 'Hosting',
		description:
			'We help manage all the hassles that comes with putting your website on the web.',
		icon: <HostingIcon />,
	},
	{
		id: 3,
		name: 'Frontend App Development',
		description:
			'We create apps for you that follow modern UI/UX standards with a coherent flow.',
		icon: <FrontendIcon />,
	},
	{
		id: 4,
		name: 'Database Migrations',
		description:
			'Dealing with gigabytes of sensitive data can be tricky. We help you with managing all this data.',
		icon: <DatabaseIcon />,
	},
	{
		id: 5,
		name: 'Mobile App Development',
		description:
			'We create apps for you that are cross-platform, meaning your business will be able to reach out many more people.',
		icon: <MobileIcon />,
	},
	{
		id: 6,
		name: 'UI/UX Design',
		description:
			'We design easy-to-follow and beautiful user flows so that your customers have the best user experience.',
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
