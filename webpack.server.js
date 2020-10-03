const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/server/index.tsx',
  target: 'node',
  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        // include: path.resolve(__dirname, 'src', 'server'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // cacheDirectory: true,
          envName: 'server'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  }
}
