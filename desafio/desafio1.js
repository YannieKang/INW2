const leia = require("prompt-sync")()

//leia o nome do usuário
//ler o salário do usuário
//se o salário for menor 2500 a pessoa isenta
//se o salário for acima 2500 e menor igual a 5000
//paga imposto de 15% -  mostra imposto e salário liquído
//se o salário for acima de 5000 paga imposto de 25%
//mostra salário líquido e imposto a paga

//variaveis
let usuario
let salario

//entrada
usuario = leia("Digite o nome do usuário : ")
salario = parseFloat(leia("Digite o valor do salário : "))

if(salario <= 2500){
    console.log(usuario + " você é isento!!!")
}
else if(salario > 2500 && salario <= 5000){
    valorImposto = salario * 0.15
    console.log("Oi Sr."+usuario+" seu imposto é "+valorImposto)
    console.log("Seu salário liquído é "+(salario-valorImposto))
}
else{
    valorImposto = salario * 0.25
    console.log("Oi Sr."+usuario+" seu imposto é "+valorImposto)
    console.log("Seu salário liquído é "+(salario-valorImposto))
}

//fim de programa
console.log("Fim de programa")