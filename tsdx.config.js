const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss({
            purge: {
              enabled: process.env.NODE_ENV === 'publish',
              content: ['./src/**/*.{js,jsx,ts,tsx}']
            },
            content: [],
            theme: {
              extend: {},
            },
            plugins: [],
          }
          ),
          autoprefixer(),
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};