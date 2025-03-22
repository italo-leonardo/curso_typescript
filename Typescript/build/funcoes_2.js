"use strict";
function Soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(Soma(5));
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
novoUser('admin', '124');
novoUser('admin', '124', 'Admin');
