/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			"greencell": "#7ED957",
			"lime": "#d9fc67",
			},
			screens: {
				"lg": "1104px",
				"xs": "200px"
			}
		},
		
	},
	plugins: [],
}
