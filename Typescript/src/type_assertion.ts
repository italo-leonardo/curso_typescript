let nvalor: number;
let svalor: string;
let bvalor: unknown;

bvalor = 10;
nvalor = 5;
svalor = '20';
svalor = nvalor.toString(); // converte o número 5 para a string '5'
console.log(typeof(svalor));
console.log(svalor);

console.log(typeof(nvalor)); // continua sendo number a variável nvalor
console.log(nvalor);

// nvalor = Number.parseInt(svalor); // converte a string '20' para o número 20
// console.log(typeof(nvalor));
// console.log(nvalor);



// nvalor = <number>bvalor;
// //svalor = bvalor // erro de compilação - não é possível atribuir um tipo unknown a um tipo string
// svalor = <string>bvalor; // é possível fazer a conversão de tipos com o type assertion

// console.log(typeof(bvalor));
// console.log(bvalor);

// console.log(typeof(nvalor));
// console.log(nvalor);

// console.log(typeof(svalor));
// console.log(svalor);
