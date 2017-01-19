var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ],
      "plugins": []
    }
},
{
  test: /\.css$/,
  loader: "style-loader!css-loader"
},
{
  test: /\.png$/,
  loader: "url-loader?limit=100000"
},
{
  test: /\.jpg$/,
  loader: "file-loader"
},
{
  test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=10000&mimetype=application/font-woff'
},
{
  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=10000&mimetype=application/octet-stream'
},
{
  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file'
},
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=10000&mimetype=image/svg+xml'
}

];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
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
    loaders: loaders
  }
};
