var mongoose = require("mongoose");

var schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    emergencia: {
        type: mongoose.Schema.ObjectId,
        ref: 'Contato'
    }
});

var ContatoModel = mongoose.model('Contato', schema);


var contatos = [
    {nome: 'xyz1', email: 'xyz1@email.com'},
    {nome: 'xyz2', email: 'xyz2@email.com'},
    {nome: 'xyz3', email: 'xyz3@email.com'},
    {nome: 'xyz4', email: 'xyz4@email.com'}
];
const conn = mongoose.createConnection('mongodb://localhost:27017/contatooh_test');
// Deletes the entire 'mydb' database
conn.dropDatabase();

contatos.forEach((c) => {
    ContatoModel.create(c)
        .then(function () {
            console.log("Usuario inserido");
        }, function (err) {
            console.log(err);
        });
});

conn.close(true).then(
    function(){
        console.log('banco fechado');
    }
);

process.exit(0);