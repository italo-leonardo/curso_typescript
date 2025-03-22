//let coisas: [string, number, boolean] = ['abc', 123, true]; // tupla
let coisas: readonly [string, number, boolean] = ['abc', 123, true]; // tupla somente leitura
//coisas.push('def', 456, false); // erro pois não é permitido adicionar elementos por conta do readonly
//coisas.pop(); // erro pois não é permitido remover elementos por conta do readonly
console.log(coisas);
console.log(coisas[0]); // exibe o primeiro elemento da tupla
console.log(coisas[1]); // exibe o segundo elemento da tupla
console.log(coisas[2]); // exibe o terceiro elemento da tupla
//coisas[2] = false; // altera o terceiro elemento da tupla
console.log(coisas);
