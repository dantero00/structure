const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(jpg|jpeg|png)$/i,
        type: 'asset/resource',
        generator: {
          publicPath: 'http://lataquizadelcheff.com/sys4200/draken2/dist/assets/',
          outputPath: 'assets/',
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sistema de Eventos',
      template: path.resolve(__dirname, '..', './index.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
};