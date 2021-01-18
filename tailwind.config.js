const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			header: ['Montserrat', 'ui-serif'],
			body: ['Open Sans', 'ui-sans-serif'],
		},
		extend: {},
		colors: {
			...colors,
		},
	},
	variants: {
		extend: {
			borderWidth: ['last'],
		},
	},
	plugins: [],
};
