  class Pessoa {
    constructor(cpf, nome, anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }
    mostraIdade(){
        console.log(2023-this.anoNascimento)
    }
  }

  class Aluno{
    constructor(cpf,id){
        super(cpf);
        this.id=id
    }
    mostraNome(){
        console.log(this.nome)
    }
  }
  //programa principal

let p1 = new Pessoa("111.222.333-44","Marcos",2008)
let p2 = new Pessoa("222.111.333-44","Maria",2007)
let p3 = new Pessoa("333.444.555-66","Pedro",2007)
let p4 = new Pessoa("333.444.555-77","Paulo",2006)

console.log(p1.nome)
p1.mostraIdade()
console.log(p2.nome)
p2.mostraIdade()
console.log(p3.nome)
p3.mostraIdade()
console.log(p4.nome)
p4.mostraIdade()
