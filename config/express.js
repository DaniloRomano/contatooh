var express = require('express');
var expressLoad = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function () {
    var app = express();

    // configuração de ambiente
    app.set('port', 3000);

    //middleware
    app.use(express.static('./public'));

    //passport
    app.use(cookieParser());
    app.use(session(
        {
            secret: 'homem avestruz',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(helmet.hidePoweredBy());
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.use(helmet());


    //configurando view engine
    app.set('view engine', 'ejs');
    app.set('views', 'app/views');

    //body-parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    //importando os modulos com express-load
    expressLoad('models', {cwd: 'app'}) // {cwd: app} altera a pasta raz onde serão procuradas as outras
        .then('controllers') //./app/controllers
        .then('routes') //./app/routes
        .then('routes/auth.js')
        .into(app); //adiciona os modulos na instancia do express


    app.get('*',function(req,res){ //tratamento da pagina 404
        res.status(404).render('404');
    });

    return app;
}