const path = require('path');
const baseConfig = require('../../webpack.config');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, 'dist/'),
    filename: 'rich-text-editor.js',
    library: ['USWDS', 'RichTextEditor']
  }
};
