abstract class Conta{
    // Public: Atributos e métodos podem ser acessados por qualquer classe
    // Private: Atributos e métodos só podem ser acessados pela própria classe
    // Protected: Atributos e métodos só podem ser acessados pela própria classe e por classes filhas
    private readonly numero: number; // Depois que for atriduido nao pode ser modificado apenas leito
    protected titular: string; // Atributo protegido que pode ser acessado por classes filhas
    private saldoConta: number;

    constructor(titular: string){
        this.numero = this.GerarNumeroConta(); // Atributo número é inicializado com um número de conta aleatório
        this.titular = titular;
        this.saldoConta = 0;     
    
    } // abstract deixa a class com abastrada nao pode ser referenciada

    private GerarNumeroConta(): number{
        return Math.floor(Math.random() * 1000)+1;
    } // Método GerarNumeroConta() que gera um número de conta aleatório e privado

    protected info(): void{
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    } // Método info() que exibe as informações da conta

    public get saldo(): number{ 
        return this.saldoConta;
    } // Método get saldo() que retorna o saldo da conta

    private set saldo(saldoConta: number){
        this.saldoConta = saldoConta;
    } // Método set saldo() que altera o saldo da conta

    protected depositar(valor: number): void{
        if (valor <= 0){
            console.log('Valor inválido');
            return;
        } else {
            this.saldo += valor;
        } 
    } // Método depositar() que deposita um valor na conta

    protected sacar(valor: number): void{
        if (valor <= 0){
            console.log('Valor inválido');
            return;
        } if (valor <= this.saldoConta){
            this.saldo -= valor;
        } else{
            console.log('Saldo insuficiente');
        }
    } // Método sacar() que saca um valor da conta


} // A classe Conta é um molde para criar objetos do tipo Conta

interface Tributos{
    taxaCalculo: number;
    CalcularTrib(valor: number):number;
} // Criacao de um interface

class ContaPF extends Conta implements Tributos{
    cpf: number;
    taxaCalculo = 0;

    constructor(cpf: number, titular: string){
        super(titular);
        this.cpf = cpf;

    };

    CalcularTrib(valor: number): number {
        return valor * this.taxaCalculo
    }

    info(){
        console.log('Conta Pessoa Física');
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('-------------------');
    } // Método info() que exibe as informações da conta

    public deposito(valor: number) {
        if (valor > 1000) {
            console.log('Depósito muito alto para pessoa física');
        }
        else {
            super.depositar(valor);
        }
    } // Método deposito() que deposita um valor na conta de pessoa física

    public saque(valor: number) {
        if (valor > 500) {
            console.log('Saque muito alto para pessoa física');
        }
        else {
            super.sacar(valor);
        }
    } // Método saque() que saca um valor da conta de pessoa física

} // A classe ContaPF é um molde para criar objetos do tipo ContaPF e filha da classe Conta

class ContaPJ extends Conta{
    cnpj: number;

    constructor(cnpj: number,titular: string){
        super(titular);
        this.cnpj = cnpj;
    };

    info(){
        console.log('Conta Pessoa Juruídica');
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('-------------------');
    }; // Método info() que exibe as informações da conta

    public deposito(valor: number) {
        if (valor > 10000) {
            console.log('Depósito muito alto para pessoa jurídica');
        }
        else {
            super.depositar(valor);
        } // Método deposito() que deposita um valor na conta de pessoa jurídica
    }

    public saque(valor: number) {
        if (valor > 5000) {
            console.log('Saque muito alto para pessoa jurídica');
        }
        else {
            super.sacar(valor);
        } // Método saque() que saca um valor da conta de pessoa jurídica
    }


} // A classe ContaPJ é um molde para criar objetos do tipo ContaPJ e filha da classe Conta

const conta1 = new ContaPF(23456, 'João'); // new ContaPF() é a instanciação da classe ContaPF
const conta2 = new ContaPJ(54321, 'Curso em Vídeo'); // new ContaPJ() é a instanciação da classe ContaPJ
// const conta3 = new Conta("Pedro") // nao pode ser usada pq esta abstract

// conta1.info();
// conta2.info();

conta1.deposito(1000)
conta2.deposito(10000)

// conta1.saque(500)
// conta1.saque(500)
// conta1.saque(1)
// conta1.saldo = 500; 
// conta2.saldo = 5000;

console.log(conta1.saldo);
console.log(conta2.saldo);