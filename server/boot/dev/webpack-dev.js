/* eslint-disable import/no-extraneous-dependencies */
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('../../helpers/webpack');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = (app) => {
  if (isProduction) return;

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

  app.use(middleware);
};
