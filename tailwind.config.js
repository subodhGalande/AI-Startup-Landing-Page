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
      height: {
        "screen-minus-navbar-mobile": "calc(100vh - 72px)", // Assuming the navbar height is 64px
      },
      backgroundImage: {
        "hero-pattern-mobile": "url('/patternMobile.png')",
        starMobile: "url('/starsMobile.png')",
        mobileEllipse: "url('/Ellipse.png')",

        "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        "AI-Purple": "#9855FF",
      },
    },
  },
  plugins: [],
};
