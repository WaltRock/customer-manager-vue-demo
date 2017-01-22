/* eslint-disable no-console */
const path = require('path');
const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

const bootOptions = {
  appRootDir: path.resolve(__dirname),
  bootScripts: [
    'boot/authentication.js',
    'boot/webpack-dev.js',
    'boot/webpack-hmr.js',
    'boot/root.js',
  ],
};

// start the webserver
app.start = () => app.listen(() => {
  app.emit('started');

  const baseUrl = app.get('url').replace(/\/$/, '');
  console.log('Web server listening at: %s', baseUrl);

  if (app.get('loopback-component-explorer')) {
    const explorerPath = app.get('loopback-component-explorer').mountPath;
    console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
  }
});

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, bootOptions, (err) => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});
