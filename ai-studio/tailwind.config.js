/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E3B2A',     // Deep Green
        accent: '#0E3B2A',      // Deep Green Accent
        background: '#FFFFFF',  // Pure White
        neutral: '#F5F3EE',     // Light Beige / Warm Grey
        dark: '#111111',        // Dark Charcoal
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
