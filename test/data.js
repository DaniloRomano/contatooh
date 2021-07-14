var MongoClient = require('mongodb').MongoClient;
var contatos = [
    {nome: "xyz1", email: 'xyz1@email.com.br'},
    {nome: "xyz2", email: 'xyz2@email.com.br'},
    {nome: "xyz3", email: 'xyz3@email.com.br'},
];

MongoClient.connect('mongodb://127.0.0.1:27017/',
    function (erro, db) {
        if (erro) throw err;
        var dbo=db.db("contatooh_test");
        dbo.dropDatabase(function (err) {
            if (err) return console.log(err);
            dbo.collection('contatos').insertMany(contatos,
                function (err, inserted) {
                    if (err) return console.log(err);
                    console.log('Banco populado com sucesso')
                    process.exit(0);
                });
        });
    }
);