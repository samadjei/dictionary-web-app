/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
		},
		fontFamily: {
			'Inter-Regular': ['Inter-Regular', 'sans-serif'],
			'Inter-Bold': ['Inter-Bold', 'sans-serif'],
			'Iconsolata-Regular': ['Iconsolata-Regular', 'monospace'],
			'Iconsolata-Bold': ['Iconsolata-Bold', 'sans-serif'],
			'Lora-Regular': ['Lora-Regular', 'serif'],
			'Lora-Bold': ['Lora Bold', 'sans-serif'],
			'Lora-BoldItalic': ['Lora-Bold-Italic', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
