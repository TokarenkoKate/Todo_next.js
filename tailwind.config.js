/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-text": "rgb(var(--main-text) / <alpha-value>)",
        "auxiliary-text": "rgb(var(--auxiliary-text) / <alpha-value>)",
        "page-bg": "rgb(var(--page-bg) / <alpha-value>)",
        "components-bg": "rgb(var(--components-bg) / <alpha-value>)",
        stroke: "rgb(var(--stroke) / <alpha-value>)",
        "input-bg": "rgb(var(--input-bg) / <alpha-value>)",
        "accent-green": "rgb(var(--accent-green) / <alpha-value>)",
        "accent-red": "rgb(var(--accent-red) / <alpha-value>)",
        "accent-light-red": "rgb(var(--accent-light-red) / <alpha-value>)",
        "accent-light-green": "rgb(var(--accent-light-green) / <alpha-value>)",
        white: "rgb(var(--white) / <alpha-value>)",
      },
    }
  },
  plugins: [],
}
