const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
module.exports = {
  entry: ['./client/index.tsx'],
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: 'client/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()]
}
