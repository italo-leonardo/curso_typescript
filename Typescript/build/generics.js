"use strict";
function f_teste(v, r) {
    return v;
}
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    ;
}
const ct1 = new C_teste(1);
const ct2 = new C_teste(true);
console.log(ct1);
console.log(ct2);
