/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Montserrat', sans-serif",
        title: "Times New Roman",
        subtitle: "Carla Sans",
      },
      colors: {
        primary: {
          50: "#FFF9E1", // Valor por defecto
          100: "#FFF4C0",
          200: "#FFE785",
          300: "#FFD13F",
          400: "#FFB70B",
          500: "#F49D00",
          600: "#D37600",
          700: "#A85100",
          800: "#8A3F09",
          900: "#75340E",
          950: "#451903",
        },
        accent: {
          50: "#F2F7F4",
          100: "#E1EAE2",
          200: "#C4D6C9",
          300: "#DD9E80",
          400: "#9CB9A5",
          500: "#50795F",
          600: "#3C5F4A",
          700: "#355442", // Valor por defecto
          800: "#283D31",
          900: "#213329",
          950: "#121C17",
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
