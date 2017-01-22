const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.dev');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = (app) => {
  if (isProduction) return;

  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
};
