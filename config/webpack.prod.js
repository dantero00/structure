const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

module.exports = merge(common, {
  mode: 'production',
  entry: {
    //bundle: './src/index.tsx',
    main: ['./src/index.tsx']
  },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: './dist/',
    filename: '[name].js',
    clean: true,
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
          use :[MiniCssExtractPlugin.loader,'css-loader','sass-loader',]
      }
    ],
  },
});