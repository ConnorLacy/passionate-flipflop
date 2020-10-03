const path = require('path')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'clientBundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src', 'client')],
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ],
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'src', 'client')],
      extensions: ['.js', '.json', '.jsx', '.css']
    }
  },
  target: 'web',
  externals: ['react']
}
