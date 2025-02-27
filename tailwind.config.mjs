/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {

			'obscure': '#202020',
			'obscure-dark': '#000000',
			'obscure-light': '#464646',

			'blank': '#dadada',
			'blank-dark': '#cacaca',
			'blank-light': '#fffefa',

			'first': '#202020',
			'first-dark': '#000000',
			'first-light': '#464646',

			'second': '#dadada',
			'second-dark': '#cacaca',
			'second-light': '#fffefa'

			// 'obscure': '#1D5D9B',
			// 'obscure-dark': '#0A1931',
			// 'obscure-light': '#0F67B1',

			// 'blank': '#FBEEAC',
			// 'blank-dark': '#F4F27E',
			// 'blank-light': '#FEFFD2',

			// 'first': '#75C2F6',
			// 'first-dark': '#3081D0',
			// 'first-light': '#77CDFF',

			// 'second': '#F4D160',
			// 'second-dark': '#FFCF4C',
			// 'second-light': '#FAE458'
		}
	},
	darkMode: ['class'],
	plugins: [],
}
