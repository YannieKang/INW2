//CLASSES
class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }

    ativar(){
        this.ativo = true;
    }

    credito(valor){
        if (this.ativo){
          console.log("Impossivel realizar, valor negativo...")
        }
        else if(valor==0){
        console.log("Impossivvel realizar, valor zerado...")
        }
        else{
            this.saldo += valor
        }

    }

    debito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
            }
            else if(valor ==0 ){
                console.log("Impossivel realizar, valor zerado...")
            }
            else if(valor>this.saldo){
                console.log("Impossivel realizar, saldo indisponivel...")
            }
            else {
                this.saldo -= valor
                //this.saldo = this.saldo - valor 
            }
        }
        else {
            console.log("Conta inativa...")
        }
    }

}


//PROGRAMA PRINCIPAL
const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new Conta(numero,cpf,0,false)
let op=""
c1.ativar()
for (let x=1; x<=10; x++){
    console.log("Movimento:"+x)
    console.log("Saldo atual conta :"+c1.saldo) 
    op = leia("Digite D - debito ou C para credito :")
    if(op=="D"){
        valor = psrseInt(leia("Digite o valor para debito :"))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = leia("Digite o valor para credito :")
        c1.credito(valor)
    }
    
}

console.log("Saldo final da conta"+c1.saldo)
