const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.base');

const ExtractSASS = new ExtractTextPlugin({ filename: 'styles/app.[hash].css' });

module.exports = Object.assign({}, baseWebpackConfig, {
  devtool: 'source-map',
  output: Object.assign({}, baseWebpackConfig.output, {
    filename: './js/app.[hash].js',
    chunkFilename: './js/app.[hash].js',
  }),
  plugins: baseWebpackConfig.plugins.concat([
    new Webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    ExtractSASS,
    new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }]),
  ]),
  module: Object.assign({}, baseWebpackConfig.module, {
    rules: baseWebpackConfig.module.rules.concat({
      test: /\.scss$/,
      use: ExtractSASS.extract(['css-loader', 'sass-loader'])
    })
  })
});
