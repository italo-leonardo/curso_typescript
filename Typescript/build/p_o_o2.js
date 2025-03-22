"use strict";
class computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}
const Compt1 = new computador('Rapidao', 64, 10, true);
const Compt2 = new computador('Lentao', 32, 5, true);
const Compt3 = new computador('Médio', 128, 15, true);
console.log(Compt1);
console.log(Compt2);
console.log(Compt3);
