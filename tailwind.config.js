/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Jar green shades
        "jar-green": "#5d7a5d",
        "jar-green-dark": "#4a6249",
        "jar-green-light": "#7a9679",

        // Orange accent
        "jar-orange": "#c76148",
        "jar-orange-dark": "#a64e39",

        // Page backgrounds
        "page-bg": "#fefcf8",
        "card-bg": "#ffffff",
        "card-bg-secondary": "#f8f6f2",

        // Text colors
        "text-main": "#333333",
        "text-light": "#666666",
        "text-on-green": "#ffffff",

        // Borders and accents
        "border-color": "#e5e7eb",
      },
    },
  },
  plugins: [],
};
