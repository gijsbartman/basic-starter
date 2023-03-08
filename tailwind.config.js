/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [],
  theme: {
    extend: {
      colors: {
        primary: '#0239E1',
        secondary: '#00D5A1',
        tertiary: '#00C9FF',
        body: '#00C9FF',
        'text-dark': '#607796',
        'text-light': '#A4C1CF',
        'text-white': '#F0F1F3',
        background: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-italiana)', 'serif'],
        body: ['var(--font-ubuntu)', 'sans-serif'],
      },
    },
    screens: {
      xxs: '360px',
      xs: '480px',
      ss: '650px',
      sm: '768px',
      md: '992px',
      lg: '1140px',
      xl: '1440px',
    },
  },
  plugins: [],
};
