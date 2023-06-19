const leia = require("prompt-sync")()

let aluno1, aluno2
let nota1, nota2

aluno1 = leia("Digite o nome do aluno 1:")
nota1 = parseInt(leia("Digite a nota do aluno 1 :"))

aluno2 = leia("Digite o nome do aluno 1:")
nota2 = parseInt(leia("Digite a nota do aluno 1 :"))

//se a nota for menor que 5 mostra rec

if(nota1<5)
{
    console.log("Oi "+aluno1+" vc está de rec")
}else{
    console.log("Oi "+aluno1+" vc está aprovado")
}

if(nota2<5)
{
    console.log("Oi "+aluno2+" vc está de rec")
}else{
    console.log("Oi "+aluno2+" vc está aprovado")
}


