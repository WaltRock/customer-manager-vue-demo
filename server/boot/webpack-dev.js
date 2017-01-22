const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('../config/webpack.dev');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = (app) => {
  if (isProduction) return;

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
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
