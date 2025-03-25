"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objeto = exports.Coisa = void 0;
const Coisa = ['Corda', 'Pilha', 'Lampada', 'Chaves'];
exports.Coisa = Coisa;
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
class objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.objeto = objeto;
exports.default = Pessoa;
