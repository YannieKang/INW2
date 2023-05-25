class Conta{ 
    constructor(numero, cpf, saldo, ativa){ 
        this.numero = numero; 
        this.cpf = cpf; 
        this.saldo = saldo; 
        this.ativa = ativa; 
    } 
    
    ativar(){ 
        if(this.ativa == false){ 
            this.ativa = true; 
            console.log("Conta ativada!") 
        } else { 
            console.log("A conta já está ativa") 
        } 
    } 
    
    credito(valor){ 
        if(this.ativa == true){ 
            this.saldo += valor; 
            console.log(`Valor adicionado! Saldo = ${this.saldo}`); 
        } else { 
            console.log("Conta inativa") 
        } 
    } 
    
    debito(valor){ 
        if((this.saldo - valor) >= 0){ 
            this.saldo -= valor; 
            console.log(`Valor retirado! Saldo = ${this.saldo}`); 
        } else { 
            console.log("Não é possível deixar o saldo negativo"); 
        } 
    } 
    
    desativar(){ 
        if(this.ativa){ 
            this.ativa = false; 
            console.log("Conta desativada!") 
        } else { 
            console.log("A conta já está desativa") 
        } 
    } 
} 

class Poupanca extends Conta{ 
    constructor(numero,cpf,saldo,ativo,diaPoupanca,diaAtual){
         super(numero,cpf,saldo,ativo); 
         this.diaPoupanca = diaPoupanca; 
         this.diaAtual = diaAtual 
        } 
        
        correcaoDoSaldo(dia){ 
            if(this.diaPoupanca == dia){ 
                this.saldo = (this.saldo * 0.05)+this.saldo 
                console.log("Sua conta foi corrigida") 
            } else{ 
                console.log("Não é a data de correção da sua conta") 
            } 
        } 
    }  if(opcao == "2"){ 
        let numero = parseInt(leia("Insira o número da conta: ")); 
        let cpf = leia("Insira o cpf: "); 
        let diaPoupanca = leia("Digite o dia da sua Conta Poupança : ")
        let dia = leia("Digite o dia atual : ") 
    }
        
        const c1 = new Poupanca(numero, cpf, 0, false, diaPoupanca, dia); 
        let op=""; 
        let valor = 0; 
        let pede; c1.ativar(); 

        for (i=1; i<10; i++){ 
            console.log("Movimento: "+ i) 
            console.log("Saldo atual da conta: " + c1.saldo) 
            op = leia("Digite D para débito ou C para crédito: ") 
            
            if(op == "D"){ 
                valor = parseInt(leia("Digite o valor para debito: ")) 
                c1.debito(valor) 
            } else if(op == "C"){
                valor = parseInt(leia("Digite o valor para credito: "))
                c1.credito(valor) 
            } 
            console.log("Saldo atual da conta: " + c1.saldo) 
            pede = leia("Gostaria de sair?(S/N) "); 
            if(pede == "S"){ 
                c1.desativar(); 
                break; 
            } 
        } 
        
        c1.correcaoDoSaldo(dia) 
        console.log("Saldo final da conta R$ : "+c1.saldo)