var http = require('http');

var app = require('./config/express')();
require('./config/passport')();
var config =require('./config/config')();
require('./config/database.js')(config.db);


http.createServer(app)
    .listen(
        app.get('port'),
        function () {
            console.log("Express server executando na porta: ", app.get('port'));
        });