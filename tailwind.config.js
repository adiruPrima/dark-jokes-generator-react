/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseText: "pulseText 1.5s ease-in-out infinite",
      },
      keyframes: {
        pulseText: {
          "0%, 100%": {
            transform: "scale(1) rotate(20deg)",
          },
          "50%": {
            transform: "scale(1.2) rotate(20deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
