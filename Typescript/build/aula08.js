"use strict";
let dados = {
    nome: 'Fulano',
    idade: 37,
    casado: true,
    ola: () => {
        console.log('Olá');
    },
    info: (nome) => { console.log(nome); }
};
console.log(typeof dados);
console.log(dados);
console.log(dados.nome);
dados.nome = 'Ciclano';
console.log(dados);
dados.ola();
dados.info('Beltrano');
