module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "scale(0.8) translateY(20px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideIn: "slideIn 0.3s ease-out",
      },
    },
  },
};
