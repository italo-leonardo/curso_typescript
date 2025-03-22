"use strict";
const teste = (txt) => {
    console.log(txt);
};
const Soma2 = (n) => {
    let res = 0;
    n.forEach((v) => {
        res += v;
    });
    return res;
};
let numer = [1, 2, 3, 4, 5];
console.log(Soma2(numer));
