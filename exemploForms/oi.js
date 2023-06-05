//console.log("NOME\tNOTA\tTURMA")
//console.log("Yannie\t10\t2MIB")
//console.log("Lora\t16\t2MIB")
//console.log("Erica\t05\t2MIC")

//let nome = "Pedro"

//let valor1 = 10

//let valor2 = 20

//let valor3 = valor1 + valor2

//console.log("Oi meu amigo(a)"+nome.toLowerCase())

//console.log("A soma dos dois valores é :"+(valor1+valor2))

const leia = require("prompt-sync")()

let numero1, numero2 = 0

numero1 = parseInt(leia("Digite o primeiro numero :"))
numero2 = parseInt(leia("Digite o segundo numero :"))

console.log("a soma de "+numero1+" mais "+numero2+" é "+(numero1+numero2))