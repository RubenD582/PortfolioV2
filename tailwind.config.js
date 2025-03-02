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
        sans: ['Roboto', 'sans-serif'], // Default body font
        poppins: ['Poppins', 'sans-serif'], // Use for headings
        BodoniModa: ['Bodoni Moda', 'sans-serif'], // Use for headings
        dancingScript: ['Dancing Script', 'cursive'],
        Inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
