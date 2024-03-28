/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Poppins', sans-serif",
        title: "Herabara",
        subtitle: "Herabara",
      },
      colors: {
        primary: {
          50: "#FAF5F9", // Valor por defecto
          100: "#F6EDF4",
          200: "#EEDCE9",
          300: "#E1C0D8",
          400: "#D2A0C3",
          500: "#BC78A6",
          600: "#A75B8A",
          700: "#8E4871",
          800: "#763E5F",
          900: "#643751",
          950: "#3B1C2D",
        },
        accent: {
          50: "#FBF5F1",
          100: "#F6E7DE",
          200: "#EDCDBB",
          300: "#DD9E80",
          400: "#D48163",
          500: "#CB6244",
          600: "#BD4D39",
          700: "#9D3C31", // Valor por defecto
          800: "#7E332E",
          900: "#672C27",
          950: "#371413",
        },
        grey: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#222222",
        },
      },
    },
  },
  plugins: [],
};
