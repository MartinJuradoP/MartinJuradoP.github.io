export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf5ee',
          200: '#f5e6d3',
          300: '#f0d7b8',
          400: '#e8b88f',
          500: '#d4a574',
          600: '#c8955f',
          700: '#a0753e',
          800: '#6d4f2e',
          900: '#3a2a18'
        },
        navy: {
          50: '#f8f9fc',
          100: '#f0f3f9',
          200: '#d9e2f5',
          300: '#c0caea',
          400: '#99a9d4',
          500: '#5f7eb8',
          600: '#425fa0',
          700: '#2d4180',
          800: '#1a2654',
          900: '#0f1829'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(circle at 45% 50%, rgba(212, 165, 116, 0.05) 0%, transparent 60%)',
        'grain': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".9\" numOctaves=\"4\" /></filter><rect width=\"300\" height=\"300\" fill=\"%23000\" /><rect width=\"300\" height=\"300\" fill=\"%23fff\" opacity=\".02\" filter=\"url(%23n)\" /></svg>')"
      }
    }
  },
  plugins: []
};
