//receba um némuro do usuário 5 e 9//
//multiplique por 3//
//acima de 100 o programa para//
const leia = require("prompt-sync")()


let numero 
let total

numero = parseInt(leia("Digite um número entre 5 e 9 : "))

console.log(numero)




if(numero<5){
    console.log("O número precisa ser maior! Digite um número maior igual a 5!")
}
else if(numero>9){
    console.log("O número é muito grande! Digite um número menor igual a 9!")
}
else{
    do{
        numero = numero * 3
        console.log(numero)
    }while(numero<100)
}


