/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'gray-dark': '#1E1E1E',
				'gray-light': '#5B5B5B',
				'accent': '#F23005',
			},
      fontFamily: {
        'clash-grotesk': ['Clash Grotesk', 'sans-serif'],
      },
      fontWeight: {
        'extralight': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
      }
		},
	},
	plugins: [],
};
