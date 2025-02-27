/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          light: '#3385d6',
          dark: '#004c99'
        },
        secondary: {
          DEFAULT: '#6e56cf',
          light: '#8f7cd7',
          dark: '#5a449c'
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb', 
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        success: '#059669',
        warning: '#f59e0b',
        error: '#dc2626',
        info: '#3b82f6'
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--eds-color-neutral-900)',
            a: {
              color: 'var(--eds-color-primary)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: 'var(--eds-color-primary-dark)',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: 'var(--eds-color-neutral-900)',
              fontWeight: '700',
            },
            h2: {
              color: 'var(--eds-color-neutral-900)',
              fontWeight: '600',
            },
            h3: {
              color: 'var(--eds-color-neutral-900)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--eds-color-neutral-900)',
              fontWeight: '600',
            },
            code: {
              color: 'var(--eds-color-neutral-900)',
              backgroundColor: 'var(--eds-color-neutral-100)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}