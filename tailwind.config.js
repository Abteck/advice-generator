/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        //  Primary
        "Light-Cyan": "hsl(193, 38%, 86%)",
        "Neon-Green": "hsl(150, 100%, 66%)",

        //  Neutral
        "Grayish-Blue": "hsl(217, 19%, 38%)",
        "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "Dark-Blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        Manrope: "'Manrope', sans-serif",
      },
    },
  },
  plugins: [],
};
