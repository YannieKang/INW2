const PromptSync = require('prompt-sync');

class Limpeza{
    constructor(id,descricao,ativo,estoque,preco,quantidade,tipo){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.quantidade = quantidade;
        this.tipo = tipo
    }

    ativar(){
        if(this.ativa == false){
            this.ativa = true;
            console.log("Conta ativada")
        }else{
            console.log("A conta já está ativada")
        }
        }

        incluirEstoque(quantia){
            if(this.ativa == true){
                if(quantia > 10){
                    console.log("Limite de produto por estoque atingido")
                }
                else{
                this.estoque += quantia;
                console.log(`Produto adicionado! Estoque = ${this.estoque}`) 
                }   
            }else{
                console.log("Produto inativo")
            }
            }

        retirarEstoque(quantia){
            if((this.saldo - quantia) >= 0){
                this.saldo -= quantia;
                console.log(`Produto retirado! Estoque = ${this.estoque}`);
            }else{
                console.log("Não é possível retirar o produto do estoque")
            }

            }

        }


console.log("Clean House")
console.log("Uma casa e uma vida mais saudavel!")


function fazerCompra(){
    console.log("Clean House")
    console.log("Uma casa e uma vida mais saudavel!")
    let id = parseInt(leia("Insira o id do produto desejado:"));
    let descricao = leia("Insira a descrição do produto:");
    let preco = parseInt(leia("Insira o preço do produto:"));
    let quantidade =leia("Insira a quantidade do produto:");
    let tipo = leia("Insira o tipo do produto:")

    const produto1 = new Limpeza(id,descricao,false,10,preco,quantidade,tipo);
    produto1.ativar();

    for(i = 1; i <= 5; i++){
        console.log(`Venda${i}`);
        console.log(produto1);
        let quantia = parseInt(leia("Quantos produtos você deseja comprar?:"));
        produto1.retirarEstoque(quantia);
    }

    let quantia = parseInt(leia("Quantod produtos você gostaria de adicionar ao estoque?:"));
    produto1.incluirEstoque(quantia);

    let quer = leia("Quer comprar mais algo?(S/N):");
    if(quer == "S"){
        fazerCompra()
    }
    
    else{
        console.log("Até breve!")
    }
}

const leia = require('prompt-sync')();

let quer = leia("Quer comprar mais algo?(S/N):");
if(quer == "S"){
    fazerCompra()
}

else{
    console.log("Até breve!")
}






    

        
