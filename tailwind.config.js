/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F4E37",
        secondary: "#A67B5B",
        tertiary: "#ECB176",
        light: "#FED8B1",
        dark: "#503C3C",
      },
      fontFamily: {
        grotesk: "Space Grotesk",
        jetbrains: "JetBrains Mono",
        poppins: "Poppins",
        mono: "Space Mono",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
