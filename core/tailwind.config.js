/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  darkMode: "media",
  darkMode: "selector", // or "media" or "class" this is for dark mode see doc. or you can ignore it 

  content: [
    "../**/*.html",
    "../node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}