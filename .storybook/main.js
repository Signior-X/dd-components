module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  typescript: {
    check: true, // type-check stories during Storybook build
  },
}
