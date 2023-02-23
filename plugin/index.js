const ddPlugin = require("tailwindcss/plugin")(
  function ({ addBase, addUtilities, theme }) {
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

    // https://github.com/tailwindlabs/tailwindcss/issues/9428
    // We can't use @apply here, so what should be our approach? Or can we?
    // 1st approach can be to add styles here
    // 2nd approach can be to add tailwind classes directly in js
    addUtilities(({
      ".btn": {
        "display": "flex",
        "flex-flow": "row",
        "justify-content": "center",
        "gap": "0.5rem",
        "background": theme('colors.button-primary-rest'),
        "color": theme('colors.button-primary-foreground'),
        "padding": "1rem 0.75rem",
      },
      ".btn-sm": {
        fontSize: "0.75rem",
        padding: "6px 12px",
      }
    }));
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
