const leia = require("prompt-sync")()
//arrays ou vetores
let alunos = ['nome','nome','nome','nome']
let notas = [0,0,0,0]
let resultado

resultado

for(let x=0; x<alunos.length; x++){
    console.log(alunos[x])
    alunos[x] = parseInt(leia("Digite o seu nome : "))
    notas[x] = parseInt(leia("Digite a sua nota : "))
}

console.log("BOLETIM")
console.log("NOME\tNOTA")
for(let x=0; x<alunos.length; x++){
    console.log(alunos[x]+'\t'+notas[x])
    if(notas>=5){
        console.log("Aprovado")
    }
    else{
        console.log("Reaprovado")
    }
    
}
