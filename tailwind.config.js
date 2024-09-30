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
        "screen-minus-navbar-mobile": "calc(100vh - 72px)",
      },
      backgroundImage: {
        "hero-pattern-mobile": "url('/patternMobile.png')",
        "stars-Mobile": "url('/starsMobile.png')",
        "hero-pattern-desktop": "url('/patterndesktop.png')",
        "hero-3d": "url('/hero3d.png')",
        "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
        "stars-desktop": "url('/starsDesktop.png')",
        "mobile-gradient": "url('/Ellipse.png')",
        "desktop-pricing-patter": "url('/pricingpatter-desktop.png')",
      },
      colors: {
        "AI-Purple": "#9855FF",
      },
      blur: {
        hero: "400px",
      },
    },
  },
  plugins: [],
};
