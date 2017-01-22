const webpack = require('webpack');
const config = require('../../config/webpack.dev');

const compiler = webpack(config);

module.exports = {
  compiler,
  config,
};
