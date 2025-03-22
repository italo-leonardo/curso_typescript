/*let dados: object = {
    nome: 'Fulano',
    idade: 37,
    casado: true
}*/ // objeto
let dados = {
    nome: 'Fulano',
    idade: 37,
    casado: true,
    ola: () => {
        console.log('Olá');
    }, // objeto retornando uma função tipo arrow function
    info: (nome:string) => { console.log(nome); } // objeto retornando uma função tipo arrow function com parâmetro
} // objeto sem a palavra reservada object

console.log(typeof dados);
console.log(dados);
console.log(dados.nome);

dados.nome = 'Ciclano'; // altera o valor da propriedade nome
console.log(dados);
dados.ola(); // executa a função ola
dados.info('Beltrano'); // executa a função info