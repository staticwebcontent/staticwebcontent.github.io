var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var path = require('path');

module.exports.performAppConfiguration = () => {
    var app = express();
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../../web-client/dist')));
    return app;
};
