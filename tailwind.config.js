/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigShoulder: "var(--font-big-shoulder)",
        velodrama: "var(--font-velodrama)",
      },
      colors: {
        textGray: "#ffffffb2",
        textBlue: {
          DEFAULT: "#7378DE",
          dark: "#1F2632",
        },

        neutral: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#1F2632",
          dark: "#29313D",
          dark2: "#222A36",
        },
        secondary: {
          blue: {
            DEFAULT: "#676CDB",
            light: "#7378DE",
          },
        },
      },
    },
  },
  plugins: [],
};
