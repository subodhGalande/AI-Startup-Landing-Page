/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      "inner-white": "inset 0 0 12px 0 rgba(255, 255, 255, 0.4)",
    },
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      colors: {
        "AI-Purple": "#9855FF",
      },
    },
  },
  plugins: [],
};
