/* eslint-disable import/no-extraneous-dependencies */
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('../../helpers/webpack');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = (app) => {
  if (isProduction) return;

  const middleware = webpackHotMiddleware(webpack.compiler);

  app.use(middleware);
};
