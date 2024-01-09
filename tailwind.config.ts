import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        jiggle: {
          '0%': {width: '0'},
          '14%': {width: '90%'},
          '35%': {width: '70%'},
          '55%': {width: '30%'},
          '75%': {width: '75%'},
          '90%': {width: '20%'},
          '100%': {width: '100%'},
        },
      },
      animation: {
        jiggle: 'jiggle 5s 1'
      },
    },
  },
  plugins: [],
}
export default config
