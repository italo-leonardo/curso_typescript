"use strict";
function fsoma(...n) {
    let soma = 0;
    for (let en of n) {
        if (en == 40) {
            continue;
        }
        else {
            soma += en;
        }
        ;
    }
    return soma;
}
console.log(fsoma(10, 20, 40, 50));
