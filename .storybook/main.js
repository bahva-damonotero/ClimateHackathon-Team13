const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx|md|mdx)'],
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { passArgsFirst: false } },
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve = {
      ...config.resolve,
      alias: {
        '@boozallen-uip/uswds-react-core': path.resolve(
          __dirname,
          '../packages/core/src/index',
        ),
        '@boozallen-uip/uswds-react-utils': path.resolve(
          __dirname,
          '../packages/utils/src/index',
        ),
        uswds: path.resolve(__dirname, '../node_modules/@uswds/uswds'),
      },
    };

    config.module.rules.push({
      test: /\.(s?)css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: [
                './node_modules/@uswds',
                './node_modules/@uswds/uswds/packages',
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
}
