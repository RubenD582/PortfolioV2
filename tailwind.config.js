export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideHighlight: {
          '0%': { transform: 'scaleX(0) skewX(-6deg) translateY(-0.25rem)' },
          '100%': { transform: 'scaleX(1) skewX(-6deg) translateY(-0.25rem)' },
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bodonimoda: ['Bodoni Moda', 'serif'],
        dancingscript: ['Dancing Script', 'cursive'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
