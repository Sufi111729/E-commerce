/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981', // emerald-500
          dark: '#059669', // emerald-600
          light: '#34d399' // emerald-400
        },
        secondary: {
          DEFAULT: '#6b7280', // gray-500
          dark: '#4b5563', // gray-600
          light: '#9ca3af' // gray-400
        },
        dark: {
          DEFAULT: '#1f2937', // gray-800
          lighter: '#374151', // gray-700
          darker: '#111827', // gray-900
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
 