var path = require('path');
var webpack = require('webpack');
var babelConfig = require('./babel.config');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..', '..'),
  entry: [
    'webpack-hot-middleware/client',
    './client/src/client/test.js'
  ],
  output: {
    path: '/',
    filename: 'client.js',
    publicPath: '/static/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: babelConfig
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
};