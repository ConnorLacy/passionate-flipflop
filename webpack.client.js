const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          // cacheDirectory: true,
          envName: 'client'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  },
  target: 'web'
}
