const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('./helpers/webpack');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = (params) => {
  if (isProduction || params.enabled !== true) return (req, res, next) => next();

  const middleware = webpackHotMiddleware(webpack.compiler);

  return (req, res, next) => middleware(req, res, next);
};
