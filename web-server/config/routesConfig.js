var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

module.exports.performConfigure = (app) => {

    app.use('/', indexRouter);
    app.use('/users', usersRouter);

};
