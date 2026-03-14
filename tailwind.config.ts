import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2e2e2e',
        'warm-black': '#242424',
        slate: '#454545',
        concrete: '#525252',
        steel: '#6b6b6b',
        ash: '#9a9a9a',
        sand: '#c4b5a0',
        'warm-sand': '#d4c4ad',
        cream: '#f8f6f3',
        white: '#fafaf8',
        accent: {
          DEFAULT: '#B08D57',
          light: '#CBAE80',
          dark: '#8C6F42'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
