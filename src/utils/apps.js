import { fallbackLng } from '@/app/i18n/settings';

export const featuredApps = [
	{
		slug: 'balasci',
		logo: '/logos/balasci.svg',
		link: 'https://ocr.esnajsoftware.com/',
		keywords: [
			'EUCDM-ready AI OCR',
			'ASYCUDA XML export',
			'AI customs document automation',
			'95% accuracy logistics OCR',
			'invoice and Bill of Lading OCR',
			'logistics document automation',
			'OpenAI Google Document AI logistics',
			'multi-country customs integration',
			'freight document processing automation',
			'customs compliance automation',
		],
		i18n: {
			en: {
				name: 'BALASCI',
				tagline: 'EUCDM-ready AI OCR for logistics teams',
				excerpt:
					'Balasci turns freight paperwork into customs-ready EUCDM XML within seconds, sustaining 95% accuracy across invoices and Bills of Lading.',
				overview:
					"Balasci is Esnaj Software’s AI customs automation platform. It ingests invoices, Bills of Lading, and customs packs, validates every field, and exports ASYCUDA-ready EU Customs Data Model XML so declarants stay compliant and freight keeps moving.",
				features: [
					'Produces compliant EUCDM XML ready for upload into ASYCUDA and national portals.',
					'Cross-document validation delivers 95%+ accuracy on invoices, Bills of Lading, and customs forms.',
					'Lightning OCR pipeline powered by OpenAI, Google Document AI, and Esnaj’s proprietary logic.',
					'Custom QA workspace with audit trails to surface issues before they block clearance.',
					'Trusted by Port of Rotterdam, Pfister Weighbridge, and leading European logistics providers.',
				],
				idealFor:
					'Freight forwarders, customs brokers, 3PLs, and shippers that need scalable EU customs automation.',
			},
			nl: {
				name: 'BALASCI',
				tagline: 'EUCDM-klaar AI-OCR voor logistieke teams',
				excerpt:
					'Balasci zet vrachtpapierwerk in seconden om naar douaneklare EUCDM-XML met 95% nauwkeurigheid voor facturen en vrachtbrieven.',
				overview:
					"Balasci is het AI-douaneplatform van Esnaj Software. Het leest facturen, vrachtbrieven en douanepakketten in, valideert elk veld en levert ASYCUDA-klaar EU Customs Data Model XML zodat declaranten compliant blijven en zendingen doorstromen.",
				features: [
					'Produceert conforme EUCDM-XML die direct te uploaden is in ASYCUDA en nationale portalen.',
					'Cross-documentvalidatie biedt 95%+ nauwkeurigheid op facturen, vrachtbrieven en douaneformulieren.',
					'Snelle OCR-pijplijn op basis van OpenAI, Google Document AI en eigen automatiseringslogica.',
					'Aangepaste QA-werkruimte met audittrail die issues vroegtijdig signaleert.',
					'Vertrouwd door Havenbedrijf Rotterdam, Pfister Weighbridge en toonaangevende Europese logistieke teams.',
				],
				idealFor:
					'Expediteurs, douaneagenten, 3PL’s en verladers die Europese douaneprocessen op schaal willen automatiseren.',
			},
		},
	},
	{
		slug: 'straighten-ai',
		logo: '/logos/straighten.svg',
		link: 'https://ai.esnajsoftware.com/',
		keywords: [
			'AI document straightener',
			'OCR preprocessing tool',
			'deskew scanned PDFs',
			'skewed image correction for OCR',
			'logistics document alignment',
			'improve OCR accuracy',
			'auto-align scanned documents',
		],
		i18n: {
			en: {
				name: 'STRAIGHTEN.AI',
				tagline: 'AI-powered document deskewing for logistics teams',
				excerpt:
					'Straighten.AI aligns scanned paperwork before OCR, boosting accuracy by up to 30% across automation workflows.',
				overview:
					"Straighten.AI is an AI-powered preprocessing service that auto-detects rotation, skew, and tilt before your OCR pipeline runs. It delivers clean, ready-to-read documents for downstream automation.",
				features: [
					'Automatic detection and correction of misaligned scans and photos.',
					'AI-based image correction tuned for document automation workloads.',
					'Improves OCR extraction accuracy by up to 30% in production environments.',
					'Supports PDFs, mobile captures, email attachments, and batch-scanned paperwork.',
					'Seamless drop-in step for workflows powered by Balasci and other OCR solutions.',
				],
				idealFor:
					'Logistics teams processing customs forms, shipping labels, invoices, and BoLs captured in imperfect conditions.',
			},
			nl: {
				name: 'STRAIGHTEN.AI',
				tagline: 'AI-gestuurde documentuitlijning voor logistieke teams',
				excerpt:
					'Straighten.AI lijnt gescande documenten uit vóór de OCR en verhoogt de nauwkeurigheid tot wel 30% binnen logistieke workflows.',
				overview:
					"Straighten.AI is een AI-gestuurde pre-processingdienst die rotatie, scheefstand en vervormingen herkent en corrigeert voordat uw OCR-pipeline draait. Zo ontvangt u perfect leesbare documenten voor verdere automatisering.",
				features: [
					'Automatische detectie en correctie van scheef gescande documenten en foto’s.',
					'AI-gestuurde beeldcorrectie geoptimaliseerd voor documentautomatisering.',
					'Verhoogt de OCR-nauwkeurigheid tot 30% in productieomgevingen.',
					'Werkt met PDF’s, mobiele foto’s, e-mailbijlagen en batchscans.',
					'Soepele integratie in workflows zoals Balasci en andere OCR-oplossingen.',
				],
				idealFor:
					'Teams die grote volumes logistieke documenten verwerken uit scans, foto’s of lage kwaliteit PDF’s.',
			},
		},
	},
];

export const getAppCopy = (app, lng) => app.i18n[lng] || app.i18n[fallbackLng];
