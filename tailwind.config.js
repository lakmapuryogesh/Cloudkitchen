module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        tomato: '#ff6347',
      },
    },
  },
  plugins: [],
};
