var routesConfig = require('./config/routesConfig');
var appConfig = require('./config/appConfig')

var app = appConfig.performAppConfiguration();
routesConfig.performConfigure(app);

module.exports = app;
