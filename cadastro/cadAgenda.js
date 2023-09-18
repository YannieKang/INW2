//requisitando o pacote mongoose
const mongoose = require('mongoose');

//criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

//executando a conexão
const db = mongoose.connection;

//códigos de teste da conexão
db.on('error', console.error.bind(console, 'connection error : '))

db.once('open', function(){
    console.log("Estamos conectados ao mongoDB")
})

//segunda - fase - usando o banco

//1-criando um Schema
const contatoSchema = new mongoose.Schema({
    numero : Number,
    nome : String,
    idade : Number,
    email : String
});

//2-criando a model
const Contatos = mongoose.model('Contatos', contatoSchema)

//colocar dados dentro desta collection

const epaminondas = new Contatos({
    numero: 1,
    nome : 'Epaminondas',
    idade : 17,
    email : 'epa@gmail.com'
});

epaminondas.save();

const carla = new contatoSchema({
    numero : 2,
    nome : 'Carla',
    idade : 18,
    turma : 'carla@gmail.com'
});

carla.save();

