/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: 'hsl(14, 45%, 36%)',
					secondary: 'hsl(332, 51%, 32%)',
					accent: 'hsl(332, 51%, 32%)',
					neutral: 'hsl(330, 100%, 98%)',
					'base-100': 'hsl(30, 54%, 90%)',
					'base-200': 'hsl(30, 18%, 87%)',
					'base-300': 'hsl(30, 10%, 34%)',
					white: 'hsl(0, 0%, 100%)',
					black: 'hsl(24, 5%, 18%)',
				},
			},
			'retro',
			'luxury',
		],
	},
};
