const { resolve } = require('path');
const webpack = require('webpack');
const postcssPartialImport = require('postcss-partial-import');
const postcssMixins = require('postcss-mixins');
const postcssNesting = require('postcss-nesting');
const postcssFor = require('postcss-for');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: {
    home: [
      'webpack-hot-middleware/client',
      './src/render/clientRender.js',
    ],
  },
  output: {
    path: resolve(__dirname, 'public/'),
    filename: 'app.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /node_modules\/([\w+-_\/]?)+\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /node_modules\/([\w+-_\/]?)+\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                postcssPartialImport({}),
                postcssMixins({}),
                postcssNesting({}),
                postcssFor({}),
                postcssCustomMedia({}),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
