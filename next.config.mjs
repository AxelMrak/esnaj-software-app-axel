/** @type {import('next').NextConfig} */
const legacyRedirects = [
	{
		source: '/design',
		destination: '/en/services',
		permanent: true,
	},
	{
		source: '/development',
		destination: '/en/services',
		permanent: true,
	},
	{
		source: '/design/about',
		destination: '/en/about',
		permanent: true,
	},
	{
		source: '/development/about',
		destination: '/en/about',
		permanent: true,
	},
	{
		source: '/design/contact',
		destination: '/en/contact',
		permanent: true,
	},
	{
		source: '/development/contact',
		destination: '/en/contact',
		permanent: true,
	},
	{
		source: '/design/projects',
		destination: '/en/projects',
		permanent: true,
	},
	{
		source: '/development/projects',
		destination: '/en/projects',
		permanent: true,
	},
	{
		source: '/design/projects/:slug',
		destination: '/en/projects/:slug',
		permanent: true,
	},
	{
		source: '/development/projects/:slug',
		destination: '/en/projects/:slug',
		permanent: true,
	},
	{
		source: '/design/services',
		destination: '/en/services',
		permanent: true,
	},
	{
		source: '/development/services',
		destination: '/en/services',
		permanent: true,
	},
	{
		source: '/design/services/:slug',
		destination: '/en/services/:slug',
		permanent: true,
	},
	{
		source: '/development/services/:slug',
		destination: '/en/services/:slug',
		permanent: true,
	},
	{
		source: '/contact/projects/:slug',
		destination: '/en/projects/:slug',
		permanent: true,
	},
	{
		source: '/contact/about',
		destination: '/en/about',
		permanent: true,
	},
	{
		source: '/project/:slug',
		destination: '/en/projects/:slug',
		permanent: true,
	},
];

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'esnajsoftware.com',
					},
				],
				destination: 'https://www.esnajsoftware.com/:path*',
				permanent: true,
			},
			...legacyRedirects,
		];
	},
};

export default nextConfig;
