//o usuário vai digitar números
//1- mostrar a soma dos numeros
//2- mostrar qual foi o maior número digitado
//3- o programa para de solicitar numeros quando o usuário digitar um número negativo
//contar quantos numeros foram digitados
// a soma dos números não deve considerar o número negativo
const leia = require("prompt-sync")()

//let numero = parseInt(leia("Digite um número : "))
let numero = 0
let contador = -1
let total = 0
let maiorNumero = 0



do{
    total = total + numero
    if(numero>maiorNumero){
        maiorNumero = numero
    }
    contador++
    numero = parseInt(leia("Digite um número : "))
}while(numero>0)
console.log("Total : "+total)
console.log("Maior : "+maiorNumero)
console.log("Quantidades de números : "+contador)







