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

const getTranslation = (key) => i18next.t(key);

const updateTranslations = () => {
	const updateServiceTranslations = (services) => {
		services.forEach((service) => {
			service.name = getTranslation(service.translationKeys.name);
			service.description = getTranslation(service.translationKeys.description);
			if (service.translationKeys.longDescription) {
				service.longDescription = getTranslation(
					service.translationKeys.longDescription
				);
			}
			if (service.itemsExtra) {
				service.itemsExtra.forEach((item) => {
					item.text = getTranslation(item.translationKeys.text);
				});
			}
		});
	};

	const updateProjectTranslations = (projects) => {
		projects.forEach((project) => {
			project.title = getTranslation(project.translationKeys.title);
			project.description = getTranslation(project.translationKeys.description);
			project.whatWeDid = project.translationKeys.whatWeDid.map((key) =>
				getTranslation(key)
			);
			project.technologies = project.translationKeys.technologies.map((key) =>
				getTranslation(key)
			);
		});
	};

	updateProjectTranslations(projects);

	updateServiceTranslations(mainServices);
	updateServiceTranslations(otherServices);
};

i18next.on('languageChanged', updateTranslations);

export const partnersLogos = [
	{ logo: './logos/cgi.svg', alt: 'CGI' },
	{ logo: './logos/engie.svg', alt: 'Engie' },
	{ logo: './logos/erasmus.svg', alt: 'Erasmus' },
	{ logo: './logos/facilicom.svg', alt: 'Facilicom' },
	{ logo: './logos/port-rotterdam.svg', alt: 'Port of Rotterdam' },
	{ logo: './logos/rotterdam-logo.svg', alt: 'Rotterdam' },
	{ logo: './logos/svides.svg', alt: 'Svides' },
	{ logo: './logos/tudelft.svg', alt: 'TU Delft' },
	{ logo: './logos/vanOord.svg', alt: 'Van Oord' },
	{ logo: './logos/vopak.svg', alt: 'Vopak' },
];

export const heroWords = ['Esnaj', 'Software'];

export const mainServices = [
	{
		id: 1,
		translationKeys: {
			name: 'home.services.main-services.full-stack-development.name',
			description:
				'home.services.main-services.full-stack-development.description',
			longDescription:
				'home.services.main-services.full-stack-development.long-description',
		},
		name: getTranslation(
			'home.services.main-services.full-stack-development.name'
		),
		description: getTranslation(
			'home.services.main-services.full-stack-development.description'
		),
		longDescription: getTranslation(
			'home.services.main-services.full-stack-development.long-description'
		),
		itemsExtra: [
			{
				id: 1,
				translationKeys: {
					text: 'home.services.main-services.full-stack-development.items-extra.Front-end',
				},
				name: 'Front-end',
				text: getTranslation(
					'home.services.main-services.full-stack-development.items-extra.Front-end'
				),
			},
			{
				id: 2,
				translationKeys: {
					text: 'home.services.main-services.full-stack-development.items-extra.Back-end',
				},
				name: 'Back-end',
				text: getTranslation(
					'home.services.main-services.full-stack-development.items-extra.Back-end'
				),
			},
		],
		link: 'full-stack-development',
		icon: <DevelopmentIcon />,
	},
	{
		id: 2,
		translationKeys: {
			name: 'home.services.main-services.consulting.name',
			description: 'home.services.main-services.consulting.description',
			longDescription:
				'home.services.main-services.consulting.long-description',
		},
		name: getTranslation('home.services.main-services.consulting.name'),
		description: getTranslation(
			'home.services.main-services.consulting.description'
		),
		longDescription: getTranslation(
			'home.services.main-services.consulting.long-description'
		),
		link: 'consulting',
		icon: <ConsultingIcon />,
	},
	{
		id: 3,
		translationKeys: {
			name: 'home.services.main-services.api-integration.name',
			description: 'home.services.main-services.api-integration.description',
			longDescription:
				'home.services.main-services.api-integration.long-description',
		},
		name: getTranslation('home.services.main-services.api-integration.name'),
		description: getTranslation(
			'home.services.main-services.api-integration.description'
		),
		longDescription: getTranslation(
			'home.services.main-services.api-integration.long-description'
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
		translationKeys: {
			title: 'home.projects.main-projects.career-portal-aruba.title',
			description:
				'home.projects.main-projects.career-portal-aruba.description',
			whatWeDid: [
				'home.projects.main-projects.career-portal-aruba.what-we-did.0',
				'home.projects.main-projects.career-portal-aruba.what-we-did.1',
				'home.projects.main-projects.career-portal-aruba.what-we-did.2',
				'home.projects.main-projects.career-portal-aruba.what-we-did.3',
			],
			technologies: [
				'home.projects.main-projects.career-portal-aruba.technologies.0',
				'home.projects.main-projects.career-portal-aruba.technologies.1',
				'home.projects.main-projects.career-portal-aruba.technologies.2',
				'home.projects.main-projects.career-portal-aruba.technologies.3',
				'home.projects.main-projects.career-portal-aruba.technologies.4',
				'home.projects.main-projects.career-portal-aruba.technologies.5',
				'home.projects.main-projects.career-portal-aruba.technologies.6',
			],
		},
		title: getTranslation(
			'home.projects.main-projects.career-portal-aruba.title'
		),
		description: getTranslation(
			'home.projects.main-projects.career-portal-aruba.description'
		),
		whatWeDid: [
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.what-we-did.0'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.what-we-did.1'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.what-we-did.2'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.what-we-did.3'
			),
		],
		technologies: [
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.0'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.1'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.2'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.3'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.4'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.5'
			),
			getTranslation(
				'home.projects.main-projects.career-portal-aruba.technologies.6'
			),
		],
		link: 'career-portal-aruba',
		image: '/images/projects/cpa-img.webp',
	},
	{
		id: 2,
		translationKeys: {
			title: 'home.projects.main-projects.pfister-weighbridge.title',
			description:
				'home.projects.main-projects.pfister-weighbridge.description',
			whatWeDid: [
				'home.projects.main-projects.pfister-weighbridge.what-we-did.0',
				'home.projects.main-projects.pfister-weighbridge.what-we-did.1',
				'home.projects.main-projects.pfister-weighbridge.what-we-did.2',
			],
			technologies: [
				'home.projects.main-projects.pfister-weighbridge.technologies.0',
				'home.projects.main-projects.pfister-weighbridge.technologies.1',
			],
		},
		title: getTranslation(
			'home.projects.main-projects.pfister-weighbridge.title'
		),
		description: getTranslation(
			'home.projects.main-projects.pfister-weighbridge.description'
		),
		whatWeDid: [
			getTranslation(
				'home.projects.main-projects.pfister-weighbridge.what-we-did.0'
			),
			getTranslation(
				'home.projects.main-projects.pfister-weighbridge.what-we-did.1'
			),
			getTranslation(
				'home.projects.main-projects.pfister-weighbridge.what-we-did.2'
			),
		],
		technologies: [
			getTranslation(
				'home.projects.main-projects.pfister-weighbridge.technologies.0'
			),
			getTranslation(
				'home.projects.main-projects.pfister-weighbridge.technologies.1'
			),
		],
		link: 'pfister-weighbridge',
		image: '/images/projects/pfister-image.webp',
	},
	{
		id: 3,
		translationKeys: {
			title: 'home.projects.main-projects.rocketx.title',
			description: 'home.projects.main-projects.rocketx.description',
			whatWeDid: [
				'home.projects.main-projects.rocketx.what-we-did.0',
				'home.projects.main-projects.rocketx.what-we-did.1',
			],
			technologies: [
				'home.projects.main-projects.rocketx.technologies.0',
				'home.projects.main-projects.rocketx.technologies.1',
				'home.projects.main-projects.rocketx.technologies.2',
				'home.projects.main-projects.rocketx.technologies.3',
			],
		},
		title: getTranslation('home.projects.main-projects.rocketx.title'),
		description: getTranslation(
			'home.projects.main-projects.rocketx.description'
		),
		whatWeDid: [
			getTranslation('home.projects.main-projects.rocketx.what-we-did.0'),
			getTranslation('home.projects.main-projects.rocketx.what-we-did.1'),
		],
		technologies: [
			getTranslation('home.projects.main-projects.rocketx.technologies.0'),
			getTranslation('home.projects.main-projects.rocketx.technologies.1'),
			getTranslation('home.projects.main-projects.rocketx.technologies.2'),
		],
		link: 'rocketx',
		image: '/images/projects/rocketX-image.webp',
	},
	{
		id: 4,
		translationKeys: {
			title: 'home.projects.main-projects.haven-van-rotterdam.title',
			description:
				'home.projects.main-projects.haven-van-rotterdam.description',
			whatWeDid: [
				'home.projects.main-projects.haven-van-rotterdam.what-we-did.0',
				'home.projects.main-projects.haven-van-rotterdam.what-we-did.1',
			],
			technologies: [
				'home.projects.main-projects.haven-van-rotterdam.technologies.0',
				'home.projects.main-projects.haven-van-rotterdam.technologies.1',
				'home.projects.main-projects.haven-van-rotterdam.technologies.2',
				'home.projects.main-projects.haven-van-rotterdam.technologies.3',
			],
		},
		title: getTranslation(
			'home.projects.main-projects.haven-van-rotterdam.title'
		),
		description: getTranslation(
			'home.projects.main-projects.haven-van-rotterdam.description'
		),
		whatWeDid: [
			getTranslation(
				'home.projects.main-projects.haven-van-rotterdam.what-we-did.0'
			),
			getTranslation(
				'home.projects.main-projects.haven-van-rotterdam.what-we-did.1'
			),
		],
		technologies: [
			getTranslation(
				'home.projects.main-projects.haven-van-rotterdam.technologies.0'
			),
			getTranslation(
				'home.projects.main-projects.haven-van-rotterdam.technologies.1'
			),
			getTranslation(
				'home.projects.main-projects.haven-van-rotterdam.technologies.2'
			),
			getTranslation(
				'home.projects.main-projects.haven-van-rotterdam.technologies.3'
			),
		],
		link: 'haven-van-rotterdam',
		image: '/images/projects/haven-image.webp',
	},
	{
		id: 5,
		translationKeys: {
			title: 'home.projects.main-projects.briqwise.title',
			description: 'home.projects.main-projects.briqwise.description',
			whatWeDid: [
				'home.projects.main-projects.briqwise.what-we-did.0',
				'home.projects.main-projects.briqwise.what-we-did.1',
				'home.projects.main-projects.briqwise.what-we-did.2',
				'home.projects.main-projects.briqwise.what-we-did.3',
			],
			technologies: [
				'home.projects.main-projects.briqwise.technologies.0',
				'home.projects.main-projects.briqwise.technologies.1',
				'home.projects.main-projects.briqwise.technologies.2',
				'home.projects.main-projects.briqwise.technologies.3',
				'home.projects.main-projects.briqwise.technologies.4',
				'home.projects.main-projects.briqwise.technologies.5',
				'home.projects.main-projects.briqwise.technologies.6',
			],
		},
		title: getTranslation('home.projects.main-projects.briqwise.title'),
		description: getTranslation(
			'home.projects.main-projects.briqwise.description'
		),
		whatWeDid: [
			getTranslation('home.projects.main-projects.briqwise.what-we-did.0'),
			getTranslation('home.projects.main-projects.briqwise.what-we-did.1'),
			getTranslation('home.projects.main-projects.briqwise.what-we-did.2'),
			getTranslation('home.projects.main-projects.briqwise.what-we-did.3'),
		],
		technologies: [
			getTranslation('home.projects.main-projects.briqwise.technologies.0'),
			getTranslation('home.projects.main-projects.briqwise.technologies.1'),
			getTranslation('home.projects.main-projects.briqwise.technologies.2'),
			getTranslation('home.projects.main-projects.briqwise.technologies.3'),
			getTranslation('home.projects.main-projects.briqwise.technologies.4'),
			getTranslation('home.projects.main-projects.briqwise.technologies.5'),
			getTranslation('home.projects.main-projects.briqwise.technologies.6'),
		],
		link: 'briqwise',
		image: '/images/projects/briqwise-image.webp',
	},
	{
		id: 6,
		translationKeys: {
			title: 'home.projects.main-projects.ijsbier-steenwijk.title',
			description: 'home.projects.main-projects.ijsbier-steenwijk.description',
			whatWeDid: [
				'home.projects.main-projects.ijsbier-steenwijk.what-we-did.0',
				'home.projects.main-projects.ijsbier-steenwijk.what-we-did.1',
				'home.projects.main-projects.ijsbier-steenwijk.what-we-did.2',
			],
			technologies: [
				'home.projects.main-projects.ijsbier-steenwijk.technologies.0',
				'home.projects.main-projects.ijsbier-steenwijk.technologies.1',
			],
		},

		title: getTranslation(
			'home.projects.main-projects.ijsbier-steenwijk.title'
		),
		description: getTranslation(
			'home.projects.main-projects.ijsbier-steenwijk.description'
		),
		whatWeDid: [
			getTranslation(
				'home.projects.main-projects.ijsbier-steenwijk.what-we-did.0'
			),
			getTranslation(
				'home.projects.main-projects.ijsbier-steenwijk.what-we-did.1'
			),
			getTranslation(
				'home.projects.main-projects.ijsbier-steenwijk.what-we-did.2'
			),
		],
		technologies: [
			getTranslation(
				'home.projects.main-projects.ijsbier-steenwijk.technologies.0'
			),
			getTranslation(
				'home.projects.main-projects.ijsbier-steenwijk.technologies.1'
			),
		],
		link: 'ijsbier-steenwijk',
		image: '/images/projects/ijsbier-image.webp',
	},
];
