/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe9ee',
          200: '#ffd5df',
          300: '#ffb3c6',
          400: '#ff8aa8',
          500: '#f76a91',
          600: '#e04d77',
          700: '#b83a5f',
          800: '#93304e',
          900: '#7a2a43',
        },
        cream: {
          50: '#fffdf8',
          100: '#fdf8ee',
          200: '#f9efda',
          300: '#f3e3c2',
          400: '#ebd3a6',
          500: '#e0bf84',
        },
        lilac: {
          50: '#faf8ff',
          100: '#f3edff',
          200: '#e7dbff',
          300: '#d3bdff',
          400: '#b894ff',
          500: '#9d6bf5',
          600: '#8a4ee0',
          700: '#7339bd',
          800: '#5f309a',
          900: '#502a7e',
        },
        sage: {
          50: '#f5f9f4',
          100: '#e9f2e6',
          200: '#d3e4cd',
          300: '#b1cea6',
          400: '#8bb17d',
          500: '#6e9560',
          600: '#567948',
          700: '#46613b',
          800: '#3a4f32',
          900: '#30422b',
        },
        ink: {
          900: '#3a2b30',
          800: '#4d3a41',
          700: '#614a51',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(183, 58, 95, 0.18)',
        'soft-lg': '0 24px 60px -20px rgba(183, 58, 95, 0.28)',
        petal: '0 8px 24px -10px rgba(157, 107, 245, 0.22)',
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleZoom: {
          '0%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floatUp: 'floatUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        gentleZoom: 'gentleZoom 1.4s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
