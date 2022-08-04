module.exports = {
	mode: 'jit',
	purge: ['./src/*.html', './src/js/*.{js,jsx,ts,tsx,vue}'],
	content: ['./dist/*.{html,js}'],
	prefix: 'tw-',
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
