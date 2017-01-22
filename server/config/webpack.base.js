const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

module.exports = {
  entry: [`${ROOT}/src/main.js`],
  output: {
    path: `${ROOT}/client`,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  // resolve: {
  //   alias: {
  //     src: `${ROOT}/src`,
  //   },
  // },
  devtool: '#eval-source-map',
};
