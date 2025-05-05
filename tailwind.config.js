/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'peach': "#FF9E80",
        'yellow': "#FDBD63",
        'light-green': "#C8D6C4",
        'medium-green': "#8EA38F",
        'light-beige': "#FAF7F3",
        'medium-beige': "#F1EBDF",
        'dark-beige': "#D7B698",
        'medium-black': '#0E0E0E',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        hepta: ['"Hepta Slab"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        baskerville: ['"Baskerville"', 'serif'],
        trafit: ['"Trafit Personal Use"', 'serif'],
        eczar: ['"Eczar"', 'serif'],
      },
    },
  },
  plugins: [],
};
