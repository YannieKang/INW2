const leia = require("prompt-sync")()

let codigos = [
    "GRP0X-01",
    "GRP0X-02",
    "GRP0X-03",
    "GRP0X-04",
    "GRP0X-05",
    "GRP0X-06",
    "GRP0X-07",
    "GRP0X-08",
    "GRP0X-09",
    "GRP0X-10"
]

let produto = [
    "BONÉ             ",
    "CALÇA            ",
    "BERMUDA AFRO     ",
    "BATA             ",
    "CAMISA AFRO      ",
    "SAIA RODADA      ",
    "SAIA STYLE       ",
    "MACACÃO          ",
    "CAMISETA TEMATICA",
    "CALÇA SOCIAL AFRO"
]

let valor = [
    100.00,
    150.00,
    90.00,
    140.00,
    150.00,
    90.00,
    90.00,
    150.00,
    100.00,
    95.50
]

let estoque = [
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
]

let carrinho = [0,0,0,0,0,0,0,0,0,0]

do {
    console.log("COD\t\tDESCRIÇÃO\t\tVALOR\tQTDE")
    for(let x=0; x<produto.length; x++){
        if(auxCod==codigos[x]){
        console.log("PRODUTO SELECIONADO: ")
        console.log(codigos[x]+"\t"+produto[x]+"\t"+valor[x]+"\t"+estoque[x])
        carrinho[x] = leia("Digite a quantidade que deseja comprar : ")
        console.log("Sub-total : "+(valor[x]*carrinho[X]))
    }
}


console.log("CARRINHO DE COMPRAS")
console.log("COD\t\tDESCRIÇÃO\t\tVALOR\tQTDE\tQTDE COMPRADA")
for(let x=0; x<produto.length; x++){
    if(carrinho[x]>0){
        console.log(codigos[x]+"\t"+produto[x]+"\t"+valor+"\t"+estoque[x]+"\t"+carrinho)
        subtotal = subtotal + (valor[x]*carrinho[x])
    }
}
console.log("Valor da compra : "+subtotal)

    continua = leia("Continua Sim ou Não [S/N] ? ").toUpperCase
}while(continua !="N" )
console.log("Fim do programa, até breve!!")
