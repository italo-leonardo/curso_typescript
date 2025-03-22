"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.GerarNumeroConta();
        this.titular = titular;
    }
    GerarNumeroConta() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new ContaPF(23456, 'João');
const conta2 = new ContaPJ(54321, 'Curso em Vídeo');
console.log(conta1);
console.log(conta2);
