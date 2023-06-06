/*

programa que solicitar o nome e o ano de nascimento e em cima do ano vc calcular a idade aproximada da pessoa.
ano referencia:2023


Se a idade for menor que 3 anos
escreva - não atendemos bebês.

Se a idade for maior que 3 e menor igual a  13
escreva - [NOME] - faixa infantil

Se a idade for maior que 13 e menor igual a 17
escreva - [NOME] - faixa adolescentes

Se a idade for maior que 17 e menor que 65
escreva - [NOME] - faixa adulto

Se a idade for maior que 65
escreva - [NOME] - não atendemos idosos

*/

const leia = require("prompt-sync")()


let nome
let anoNascimento
let idade


//entrada
nome = leia("Digite seu nome : ")
anoNascimento = parseInt(leia("Digite o ano de nascimento : "))

idade = 2023 - anoNascimento


if(idade <= 3){
    console.log("Não atendemos bebês")
}
else if(idade > 3 && idade <= 13){
    console.log(nome + "faixa infantil")
}
else if(idade > 13 && idade <= 17){
    console.log(nome + "faixa adolescente")
}
else if(idade > 17 && idade <= 65){
    console.log(nome + "faixa adulto")
}
else{
    console.log("Não atendemos idosos")
}

//fim de programa
console.log("Fim de programa")
