class Conta{
    public numero: number;
    public titular: string;

    constructor(titular: string){
        this.numero = this.GerarNumeroConta();
        this.titular = titular;
    }

    GerarNumeroConta(): number{
        return Math.floor(Math.random() * 1000)+1;
    } // Método GerarNumeroConta() que gera um número de conta aleatório


} // A classe Conta é um molde para criar objetos do tipo Conta

class ContaPF extends Conta{
    cpf: number;

    constructor(cpf: number, titular: string){
        super(titular);
        this.cpf = cpf;
    }

} // A classe ContaPF é um molde para criar objetos do tipo ContaPF e filha da classe Conta

class ContaPJ extends Conta{
    cnpj: number;

    constructor(cnpj: number,titular: string){
        super(titular);
        this.cnpj = cnpj;
    }

} // A classe ContaPJ é um molde para criar objetos do tipo ContaPJ e filha da classe Conta

const conta1 = new ContaPF(23456, 'João');
const conta2 = new ContaPJ(54321, 'Curso em Vídeo');
console.log(conta1);
console.log(conta2);