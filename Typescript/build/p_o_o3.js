"use strict";
class computado {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
        this.id = 0;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('-------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
            console.log(`RAM do computador ${this.nome} aumentada para ${qtde}`);
        }
        else {
            console.log(`Quantidade ${qtde} inválida para o computador ${this.nome}`);
        }
    }
}
const Compt_1 = new computado('Rapidao', 64, 10, true);
const Compt_2 = new computado('Lentao', 32, 5, true);
const Compt_3 = new computado('Médio', 128, 15, true);
Compt_1.desligar();
Compt_2.ligar();
Compt_1.upRam(128);
Compt_1.info();
Compt_2.info();
Compt_3.info();
