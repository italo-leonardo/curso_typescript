class computador {
    nome: string;
    ram: number;
    cpu: number;
    ligado: boolean;

    constructor(nome: string, ram: number, cpu: number, ligado: boolean) {
        this.nome = nome; // this.nome é o atributo nome da classe computador
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}

// Instanciando a classe computador
const Compt1= new computador('Rapidao', 64, 10, true); // new computador() é a instanciação da classe computador
const Compt2 = new computador('Lentao', 32, 5, true);
const Compt3 = new computador('Médio', 128, 15, true);

console.log(Compt1);
console.log(Compt2);
console.log(Compt3);