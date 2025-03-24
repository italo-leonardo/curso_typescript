"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.GerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    GerarNumeroConta() {
        return Math.floor(Math.random() * 1000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log('Valor inválido');
            return;
        }
        else {
            this.saldo += valor;
        }
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log('Valor inválido');
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
        }
        else {
            console.log('Saldo insuficiente');
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    ;
    info() {
        console.log('Conta Pessoa Física');
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('-------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('Depósito muito alto para pessoa física');
        }
        else {
            super.depositar(valor);
        }
    }
    saque(valor) {
        if (valor > 500) {
            console.log('Saque muito alto para pessoa física');
        }
        else {
            super.sacar(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
    info() {
        console.log('Conta Pessoa Juruídica');
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('-------------------');
    }
    ;
    deposito(valor) {
        if (valor > 10000) {
            console.log('Depósito muito alto para pessoa jurídica');
        }
        else {
            super.depositar(valor);
        }
    }
    saque(valor) {
        if (valor > 5000) {
            console.log('Saque muito alto para pessoa jurídica');
        }
        else {
            super.sacar(valor);
        }
    }
}
const conta1 = new ContaPF(23456, 'João');
const conta2 = new ContaPJ(54321, 'Curso em Vídeo');
conta1.deposito(1000);
conta2.deposito(10000);
console.log(conta1.saldo);
console.log(conta2.saldo);
