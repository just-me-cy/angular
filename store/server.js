/**
 * Created by chenyao on 15/10/22.
 */
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("../angularjs"));
app.listen(5000);