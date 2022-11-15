/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./index.html',
		'./src/**/*.tsx'
	],
  theme: {
    extend: {
			fontFamily: {
				sans: 'Poppins, sans-serif'
			},
			fontSize: {
				xs: '8px',
				sm: '10px',
				md: '12px',
				lg: '14px',
				xl: '24px'
			}
		},
		colors: {
			white: '#ffffff',
			gray: {
				'50': '#f7f7f7',
				'200': '#e0e0e0',
				'500': '#666666',
				'800': '#212121'
			},
			poketype: {
				rock: '#b69e31',
				ghost: '#70559b',
				steel: '#b7b9d0',
				water: '#6493eb',
				grass: '#74cb48',
				psychic: '#fb5584',
				ice: '#9ad6df',
				dark: '#75574c',
				fairy: '#e69eac',
				normal: '#aaa67f',
				fighting: '#c12239',
				flying: '#a891ec',
				poison: '#a43e9e',
				ground: '#dec17b',
				bug: '#a7b723',
				fire: '#f57d31',
				electric: '#f9cf30',
				dragon: '#7037ff'
			}
		}
  },
  plugins: [],
}
