var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rules = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader",
    "query": {
      "presets": [
        "react",
        "latest",
        "stage-3"
      ],
      "plugins": []
    }
},
{
  test: /\.css$/,
  use: [
    "style-loader",
    "css-loader"
  ]
},
{
  test: /\.png$/,
  loader: 'url-loader',
  options: { limit: '100000' }
},
{
  test: /\.jpg$/,
  loader: "file-loader"
},
{
  test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {limit: '10000',
            mimetype: 'application/font-woff'}
},
{
  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {limit: '10000',
            mimetype: 'application/octet-stream'}
},
{
  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file-loader'
},
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {limit: '10000',
            mimetype: 'image/svg+xml'}
}

];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'usersapp.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    rules: rules
  }
};
