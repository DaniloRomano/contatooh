var mongoose = require('mongoose');

module.exports=function(uri){
    mongoose.connect(uri);

    mongoose.set('debug',true);

    mongoose.connection.on('connected',function(){
        console.log("MongoDb conectado");
    });

    mongoose.connection.on('disconnected',function(){
        console.log("MongoDb Desconectado");
    });

    mongoose.connection.on('error',function(){
        console.log("MongoDb Erro de Conexão");
    });

    process.on('SIGINT',function(){
        mongoose.connection.close(function(){
            console.log("Conexão com o mongodb Fechada");
            process.exit(0);
        });
    })
}