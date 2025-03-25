namespace Veiculos {
    enum Cores{'Preto', 'Branco', 'Vermelho', 'Amarelo', 'Azul', 'Prate'}

    abstract class Carro {
        private nome: string
        private motor: Motores.Motor
        private cor: string
        constructor (nome: string,motor: Motores.Motor ,cor : Cores){
            this.nome = nome;
            this.motor = motor
            this.cor = Cores[cor]
        }

        public ligar(){
            this.motor.liga = true
        }

        public deligar(){
            this.motor.liga = false
        }

        get minhaCor(){
            return this.cor
        }

        get meuNome(){
            return this.nome
        }

        get estouLigado(){
            return (this.motor.liga? "Sim": "Nao")
        }

        get minhaPotencia(){
            return this.motor.potencia
        }

    }

    export class CarroEsporte extends Carro{
        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2)
        }
        
    }

    export class CarroPopular extends Carro{
        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(3, 100), 2)
        }
    } // pode ser utilizada fora o namespace por conra do Export
}

namespace Motores{

    export class Turbo{
        private pot: number;

        constructor(pot: number){
            this.pot = pot
            // this.potencia = potencia
        }

        set potencia(potencia: number){
            this.potencia = potencia
        }
    }

    export class Motor{
        private ligado: boolean;
        private cilindros: number;
        private pot: number;

        constructor(cilindros: number,pot: number, turdo?: Turbo){
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turdo?turdo.potencia:0)
        }

        set liga(ligado: boolean){
            this.ligado = ligado
        }

        get liga(){
            return this.ligado
        }


        set potencia(potencia: number){
            this.potencia = potencia
        }

        get potencia(){
            return this.potencia
        }
    }
}

const carro1 = new Veiculos.CarroEsporte('Raid', 2)
const carro2 = new Veiculos.CarroPopular('Nuuuss', 0)

console.log(carro1)
console.log(carro2)
