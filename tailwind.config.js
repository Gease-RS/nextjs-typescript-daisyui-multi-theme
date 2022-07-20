const themes = require("./src/Themes/index");
module.exports = {
  content: ["{pages,src}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true, 
  theme: ["dark"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{ ...themes }],
  },
};