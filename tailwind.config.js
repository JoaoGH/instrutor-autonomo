/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        accent: {
          amber: '#f59e0b',
          gold: '#eab308',
          blue: '#3b82f6',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        whatsapp: {
          500: '#25d366',
          600: '#1ebd5b',
          700: '#059669',
          800: '#047857',
        },
        scrollbar: {
          track: '#f1f5f9',
          thumb: '#cbd5e1',
          hover: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
