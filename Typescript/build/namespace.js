"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prate"] = 5] = "Prate";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        deligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Nao");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsporte extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.CarroEsporte = CarroEsporte;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), 2);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        set potencia(potencia) {
            this.potencia = potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turdo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turdo ? turdo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        set potencia(potencia) {
            this.potencia = potencia;
        }
        get potencia() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsporte('Raid', 2);
const carro2 = new Veiculos.CarroPopular('Nuuuss', 0);
console.log(carro1);
console.log(carro2);
