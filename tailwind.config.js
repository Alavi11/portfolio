/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        'mac-window': '0 24px 60px rgba(0,0,0,0.45)',
        'mac-dock': '0 18px 45px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        'mac': '22px',
      },
    },
  },
  plugins: [],
};
