const externals = require('./externals');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(s?)css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  './node_modules/@uswds',
                  './node_modules/@uswds/uswds/packages'
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.scss',
      '.js',
      '.jsx',
      '.json',
      '.png',
      '.gif',
      '.jpg',
      '.svg'
    ]
  },
  output: {
    publicPath: '',
    libraryTarget: 'umd'
  },
  externals
};
