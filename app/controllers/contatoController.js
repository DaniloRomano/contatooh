var sanitize = require('mongo-sanitize');
module.exports = function (app) {
    var contatoController = {};
    var Contato = app.models.contato;

    contatoController.listaContatos = listaContatos;
    contatoController.obtemContato = obtemContato;
    contatoController.removeContato = removeContato;
    contatoController.salvaContato = salvaContato;




    /* actions */
    function listaContatos(req, res) {
        Contato.find()
            //.select("nome email")
            .populate('emergencia') //popula a referencia ao contato de emergencia
            .exec()
            .then((contatos) => {
                res.json(contatos);
            }, (erro) => {
                console.error(erro);
                res.status(500).json(erro);
            })
    }

    function obtemContato(req, res) {
        let _id = sanitize(req.params.id);
        Contato.findById(_id)
            .exec()
            .then(
                (contato) => {
                    if (!contato) throw new Error("Contato não encontrado");
                    res.json(contato);
                },
                (erro) => {
                    console.error(erro);
                    res.status(404).json(erro);
                });
    }

    function removeContato(req, res) {
        let _id = sanitize(req.params.id);
        Contato.remove({"_id": _id})
            .exec()
            .then(
                () => {
                    res.status(204).end();
                },
                (erro) => {
                    return console.error(erro);
                }
            )
    }

    function salvaContato(req, res) {
        var _id = sanitize(req.body._id);
        var dados = {
            "nome": req.body.nome,
            "email": req.body.email,
            "emergencia": req.body.emergencia || null
        };
        if (_id) {
            Contato
                .findByIdAndUpdate(_id, dados)
                .exec()
                .then(
                    (contato) => {
                        res.json(contato);
                    },
                    (erro) => {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                )
        } else {
            //Outra forma de fazer, mas não retorna promisse
            // var contato=new Contato(req.body);
            // contato.save((erro,contato)=>{
            //    if (erro){
            //        res.status(500).end();
            //        console.log(erro);
            //    } else{
            //        res.json(contato);
            //    }
            // });


            Contato.create(dados)
                .then(
                    (contato) => {
                        res.status(201).json(contato);
                    },
                    (erro) => {
                        console.error(erro);
                        res.status(500).json(erro);
                    }
                )
        }
    }

    return contatoController;
}
