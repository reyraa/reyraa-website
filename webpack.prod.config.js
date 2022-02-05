/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
// eslint-disable-next-line no-unused-vars
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPartialImport = require('postcss-partial-import');
const postcssMixins = require('postcss-mixins');
const postcssNesting = require('postcss-nesting');
const postcssFor = require('postcss-for');
const postcssCustomMedia = require('postcss-custom-media');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/render/clientRender.js'],
  },
  output: {
    path: resolve(__dirname, 'public/static'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: { fix: true },
          },
        ],
        exclude: '/node_modules/',
      },
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]_[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPartialImport({}),
                  postcssMixins({}),
                  postcssNesting({}),
                  postcssFor({}),
                  postcssCustomMedia({}),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      minChunks: 1,
      chunks: 'all',
      filename: 'vendor.js',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};
