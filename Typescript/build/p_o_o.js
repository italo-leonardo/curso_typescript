"use strict";
class Computador {
    nome = 'PC';
    ram = 0;
    cpu = 'Intel';
    ligado = false;
}
const compt1 = new Computador();
const compt2 = new Computador();
const compt3 = new Computador();
compt1.nome = 'PC Gamer';
compt2.nome = 'PC Escritório';
compt3.nome = 'PC Servidor';
console.log(compt1.nome);
console.log(compt2.nome);
console.log(compt3.nome);
