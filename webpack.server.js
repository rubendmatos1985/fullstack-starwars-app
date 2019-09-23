const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
module.exports = {
  entry: './server/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  externals: [webpackNodeExternals()]
}
