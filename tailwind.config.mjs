/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: '#F2F0ED',
      black: '#0D1B2A',
      charcoal: '#0D1B2A',
      teal: '#0A9396',
      orange: '#FF763E',
      ltOrange: '#EE9B00',
      tangerine: '#FFA229',
      lightGray: '#A5A5A5',
      midnight: '#1E1E1E',
      taupe: '#E8E3DC',
      rust: '#BB3E04',
      purple: '#6E5494',
      white: '#ffffff',
      borderGray: 'rgba(0,0,0,.16)',
      backgroundGray: 'rgba(202, 202, 229, 0.15)',
      gray: '#526471'
    },
    borderRadius: {
      DEFAULT: '2rem',
      small: '1rem',
      xs: '0.5rem'
    },
    fontFamily: {
      'sans': ['"Plus Jakarta Sans"', 'Arial', 'Helvetica', 'sans-serif'],
      'header': ['"Outfit"'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px'
    },
		extend: {},
	},
	plugins: [],
}
