class Computador {
    nome: string = 'PC';
    ram: number = 0;
    cpu: string = 'Intel';
    ligado: boolean = false;
} // A classe Computador é um molde para criar objetos do tipo Computador

const compt1 = new Computador();
const compt2 = new Computador();
const compt3 = new Computador();

compt1.nome = 'PC Gamer';
compt2.nome = 'PC Escritório';
compt3.nome = 'PC Servidor';


console.log(compt1.nome);
console.log(compt2.nome);
console.log(compt3.nome);