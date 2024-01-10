
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        slider: "linear-gradient(to top, #000 10%, transparent 100%)",
        thumbnaill: "linear-gradient(to top, #000 2%, transparent 100%)"
      },
      keyframes: {
        showContent: {
          to: {
            transform : 'translateY(0)',
            filter: 'blur(0)',
            opacity: "1"
          },
    },
  },
  animation: {
    "showContent": "showContent 0.5s ease-in-out forwards",
  },},},

  plugins: [require('tailwind-animation-delay')],
}
export default config
