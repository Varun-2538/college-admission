// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "college-bg": "url('/src/assets/Group 8.svg')",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-out forwards",
        slideInLeft: "slideInLeft 1s ease-out forwards",
      },
      textShadow: {
        "glow-sm":
          "0 0 2px rgba(139, 92, 246, 0.5), 0 0 4px rgba(139, 92, 246, 0.3)",
        "glow-md":
          "0 0 5px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.1)",
        "glow-lg":
          "0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-glow-sm": {
          textShadow:
            "0 0 2px rgba(139, 92, 246, 0.5), 0 0 4px rgba(139, 92, 246, 0.3)",
        },
        ".text-shadow-glow-md": {
          textShadow:
            "0 0 5px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.1)",
        },
        ".text-shadow-glow-lg": {
          textShadow:
            "0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
