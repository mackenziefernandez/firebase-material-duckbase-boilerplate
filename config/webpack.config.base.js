const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.join(__dirname, '../src/app/index.js')]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `js/[name].js`,
    chunkFilename: `js/[name].js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/test/, /node_modules/],
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            useCache: true
          }
        }
      },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg|ttf)$/, exclude: /node_modules/, use: { loader: 'url-loader', options: { limit: 8192, name: 'images/[name].[ext]?[hash]' } } },
      { test: /\.(woff|woff2)$/, exclude: /node_modules/, use: { loader: 'url-loader', options: { limit: 8192, name: 'fonts/[name].[ext]?[hash]' } } }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, '../src/index.html') })
  ]
};
