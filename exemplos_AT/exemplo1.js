const leia = require("prompt-sync")()

//variaveis

let matricula =[]
matricula[0] = "N01"
matricula[1] = "N02"
matricula[2] = "N03"
matricula[3] = "N04"

let nota = [0,0,0,0]

let nome = ["Marcos","Paulo","Pedro","Maria"]

let auxMat

console.log("MATRICULA\tNOME\tNOTA")

for (let i = 0; i < matricula.length; i++){
    console.log(matricula[i]+"\t\t"+nome[i]+"\t"+nota[i]);
}

auxMat = leia("coloque a matricula aqui:").toUpperCase()
console.log(auxMat)
//console.log('O aluno ${nome} tem a média de:')