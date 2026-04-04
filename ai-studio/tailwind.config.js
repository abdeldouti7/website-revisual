/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver-fern': '#1B5E3B',    // Primary brand green
        'lemon-grass': '#8CCF3F',    // Secondary accent green
        'lemon-grass-60': '#A9D27E', // Supporting soft green
        'cream': '#F3EFE6',         // Neutral warm background
        'pebbles': '#1F2F2F',       // Dark accent / body text
        
        // Aliases for easier migration if needed
        primary: '#1B5E3B',
        accent: '#8CCF3F',
        background: '#F3EFE6',
        neutral: '#FFFFFF',          // Use white for elevated elements as per prompt
        dark: '#1F2F2F',
      },
      fontFamily: {
        heading: ['Urbanist', 'sans-serif'],
        sans: ['Urbanist', 'Inter', 'sans-serif'],
        drama: ['Urbanist', 'serif'],
        mono: ['Urbanist', 'monospace'],
        serif: ['Urbanist', 'serif'],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
        '10xl': '1800px',
      },
    },
  },
  plugins: [],
}
