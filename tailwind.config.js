/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
  ],
  theme: {
    extend: {
      colors: {
        'eds-primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        'eds-secondary': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        'eds-neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        'eds-sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'eds-mono': ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      spacing: {
        'eds-1': '0.25rem',
        'eds-2': '0.5rem',
        'eds-3': '0.75rem',
        'eds-4': '1rem',
        'eds-5': '1.25rem',
        'eds-6': '1.5rem',
        'eds-8': '2rem',
        'eds-10': '2.5rem',
        'eds-12': '3rem',
        'eds-16': '4rem',
      },
      boxShadow: {
        'eds-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'eds-DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'eds-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'eds-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'eds-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'eds-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'eds-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'eds-sm': '0.125rem',
        'eds-DEFAULT': '0.25rem',
        'eds-md': '0.375rem',
        'eds-lg': '0.5rem',
        'eds-xl': '0.75rem',
        'eds-2xl': '1rem',
        'eds-3xl': '1.5rem',
      }
    },
  },
  plugins: [],
  safelist: [
    // Add classes that should always be included in the CSS output
    'eds-container',
    'eds-header',
    'eds-footer',
    'eds-sidebar',
    'eds-main',
    'eds-content'
  ],
}