const leia = require("prompt-sync")()

let matriculas = ["mat01","mat02","mat03","mat04"]
let alunos = ["Marcos","Pedro","Maria","Paulo"]
let notas = [0,0,0,0]
let situacao

console.log("MAT\tALUNOS\tNOTAS")
console.log("---------------------")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("---------------------")

console.log("Digitação de valores")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i])
    notas[i] = leia("Digite o valor da nota :")
}

console.log("MAT\tALUNOS\tNOTAS")
console.log("---------------------")
for(let i=0; i<matriculas.length; i++){
    
if(notas[i]>5)
{
    situacao="Aprovado"
}else{
    situacao="REC"
}
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}
console.log("---------------------")

console.log("ALTERAÇÃO DE DADOS")
let codigo = leia("Digite a matricula do aluno que deseja alterar :")
for(let i=0; i<matriculas.length; i++){
    if(codigo == matriculas[i]){
    console.log("Nota atual do aluno"+notas[i])
    notas[i] = leia("Digite a nova nota do aluno:")
}
}

console.log("MAT\tALUNOS\tNOTAS")
console.log("---------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5)
{
    situacao='Aprovado'
}else{
    situacao='REC'
}
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}
console.log("---------------------")