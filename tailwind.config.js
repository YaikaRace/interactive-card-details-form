/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "white",
			gradient1: "hsl(249, 99%, 64%)",
			gradient2: "hsl(278, 94%, 30%)",
			red: "hsl(0, 100%, 66%)",
			"l-grayish-violet": "hsl(270, 3%, 87%)",
			"d-grayish-violet": "hsl(279, 6%, 55%)",
			"v-d-violet": "hsl(278, 68%, 11%)",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1080px",
		},
		extend: {
			fontFamily: {
				body: '"Space Grotesk", sans-serif',
			},
			backgroundImage: {
				"bg-mobile": 'url("/public/images/bg-main-mobile.png")',
				"bg-desktop": 'url("/public/images/bg-main-desktop.png")',
			},
		},
	},
	plugins: [],
};
