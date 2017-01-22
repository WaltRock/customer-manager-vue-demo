const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('./helpers/webpack');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = (params) => {
  if (isProduction || params.enabled !== true) return (req, res, next) => next();

  const middleware = webpackMiddleware(webpack.compiler, {
    publicPath: webpack.config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  return (req, res, next) => middleware(req, res, next);
};
