
function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status('401').json('Não autorizado');
}

module.exports = function (app) {
    var contatoController = app.controllers.contatoController;

    app.route('/contatos')
        .get(verificaAutenticacao,contatoController.listaContatos)
        .post(verificaAutenticacao,contatoController.salvaContato);
    app.route('/contatos/:id')
        .get(verificaAutenticacao,contatoController.obtemContato)
        .delete(verificaAutenticacao,contatoController.removeContato);
}
