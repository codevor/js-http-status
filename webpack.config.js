const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

module.exports = {
  mode,
  entry: {
    'bundle.js': [path.resolve(__dirname, 'src/*.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? 'http-status.min.js' : 'http-status.js',
    library: 'HttpStatus',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: isProduction,
    minimizer: [new UglifyJsPlugin({ include: /\.min\.js$/ })]
  },
  resolve: {
    extensions: ['.js']
  }
};
