/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'final-heart': {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: 1 },
          '50%': { transform: 'scale(20) rotate(180deg)', opacity: 0.5 },
          '100%': { transform: 'scale(40) rotate(360deg)', opacity: 0 },
        }
      },
      animation: {
        'final-heart': 'final-heart 3s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
