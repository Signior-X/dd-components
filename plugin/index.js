const ddPlugin = require("tailwindcss/plugin")(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--text-purple-10": "#dddddd",
        "--text-purple-20": "#cccc11",
      },
      "[data-theme=dd-day]:root": {
        "--text-purple-10": "#00ffff",
        "--text-purple-20": "#ff0000",
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          primary: "#000000",
          "text-purple-10": "var(--text-purple-10)",
          "text-purple-20": "var(--text-purple-20)",
          "greys-100": "var(--greys-100)",
          "button-primary-rest": "#6268F9",
          "button-primary-hover": "#888DFB",
          "button-primary-focussed": "#4950F5",
          "button-primary-foreground": "#FFFFFF",
        },
      },
    },
  }
);

module.exports = ddPlugin;
