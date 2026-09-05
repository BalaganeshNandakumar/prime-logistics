/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: '#060D19', // Deepest background
            900: '#0B1528', // Dark Navy primary
            800: '#112240', // Deep card bg
            700: '#1D3557', // Accent blue
            600: '#2A4D7A',
            500: '#3A689F',
          },
          amber: {
            600: '#D97706',
            500: '#F59E0B', // Primary industrial accent
            400: '#FBBF24',
          },
          orange: {
            600: '#EA580C',
            500: '#F97316', // Vibrant industrial orange
            400: '#FB923C',
          },
          surface: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            800: '#1E293B',
            900: '#0F172A',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-glow': '0 10px 30px -10px rgba(11, 21, 40, 0.12)',
        'card-hover': '0 20px 35px -10px rgba(249, 115, 22, 0.15)',
        'nav-shadow': '0 4px 20px -2px rgba(6, 13, 25, 0.15)',
        'accent-glow': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(rgba(15, 23, 42, 0.12) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
