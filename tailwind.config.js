/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#368727',
          50: '#EBF5E9',
          100: '#D7EBD3',
          200: '#B0D7A7',
          300: '#88C37B',
          400: '#61AF4F',
          500: '#368727',
          600: '#2E7321',
          700: '#265F1B',
          800: '#1E4B15',
          900: '#163710',
        },
        secondary: {
          DEFAULT: '#4F46E5',
          50: '#EBEAFD',
          100: '#D7D5FB',
          200: '#B0ABF8',
          300: '#8980F4',
          400: '#6156F0',
          500: '#4F46E5',
          600: '#2217E0',
          700: '#1B12B0',
          800: '#140D7F',
          900: '#0D094F',
        }
      },
      fontFamily: {
        'eds-sans': ['Inter', 'system-ui', 'sans-serif'],
        'eds-mono': ['IBM Plex Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary-dark)',
              },
            },
            h1: {
              color: 'var(--color-text)',
            },
            h2: {
              color: 'var(--color-text)',
            },
            h3: {
              color: 'var(--color-text)',
            },
            h4: {
              color: 'var(--color-text)',
            },
            h5: {
              color: 'var(--color-text)',
            },
            h6: {
              color: 'var(--color-text)',
            },
            pre: {
              backgroundColor: 'var(--color-bg-alt)',
            },
            code: {
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: '0.25rem',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              fontWeight: '400',
            },
            thead: {
              borderBottomColor: 'var(--color-border)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--color-border)',
            },
            strong: {
              color: 'var(--color-text)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};