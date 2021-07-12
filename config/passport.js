var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: "99321987c50624e03f2a",
        clientSecret: '9aac85ada092f925cb86e350f19936e3b67f9ee8',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function (accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            {"login": profile.username}, // critério de busca
            {"nome": profile.username}, // dados adicionais a serem inseridos caso não encontre
            function (erro, usuario) {
                console.log("entrou");
                if (erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        )
    }))

    /*
        Chamado apenas UMA vez e recebe o usuário do nosso
        banco disponibilizado pelo callback da estratégia de
        autenticação. Realizará a serialização apenas do
        ObjectId do usuário na sessão.
     */
    passport.serializeUser(function (usuario, done) {
        done(null, usuario._id);
    });

    //Recebe o ObjectId do usuário armazenado na sessão
    // Cahado a CADA Requisição
    passport.deserializeUser(function (id, done) {
        Usuario.findById(id)
            .exec()
            .then((usuario) => {
                done(null, usuario);
            });
    });
}