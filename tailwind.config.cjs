/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			'main-width': '730px',
		},
		colors: {
			'color-1': '#050505',
			'color-2': '#1F1F1F',
			'color-3': '#2D2D2D',
			'color-4': '#3A3A3A',
			'color-5': '#757575',
			'color-6': '#E9E9E9',
			'color-7': '#F4F4F4',
			'color-8': '#FFFFFF',
			'color-9': '#A445ED',
			'color-10': '#FF5252',
			'color-11': '#F2F2F2',
			'color-12': '#979797',
		},
		fontFamily: {
			'Sans-Serif': ['Inter-Regular', 'sans-serif'],
			'Serif': ['Iconsolata-Regular', 'monospace'],
			'Mono': ['Lora-Regular', 'serif'],
		},
		extend: {},
	},
	plugins: [],
};
