const pingRoute = require('./routes/ping');

module.exports = function(server) {
  var router = server.loopback.Router();

  // Install a `/` route that returns server status
  // router.get('/', server.loopback.status());

  // Init other routes
  pingRoute(router);

  server.use(router);
};
