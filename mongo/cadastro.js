const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vazio',
{useNewUrlParser : true, useUnifiedTopology : true, serverSelectionTimeoutMS : 10000});

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'conection error'));

db.once('open', function(){
    console.log("Estamos logados no mongodb");
});

const pessoaSchema = new mongoose.Schema({
    nome : String,
    preco : Number,
    autor : String
});

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new Pessoa({
    nome : 'Marcos',
    preco : 25,
    autor : "Programador"
})

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.profissao);

marcos.save();
