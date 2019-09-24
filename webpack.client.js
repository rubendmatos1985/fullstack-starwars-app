const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: ['./client/index.tsx'],
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
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
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public'
  },
  externals: [webpackNodeExternals()]
}
