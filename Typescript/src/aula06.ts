let numeros: number[] = [1, 2, 3, 4, 5];
//let numeros: Array<number> = [1, 2, 3, 4, 5]; // outra forma de declarar um array
//let numeros: Array<number|string> = [1, 2, 3, 4, 5]; // outra forma de declarar um array
//let numeros: (number|string)[] = [1, 2, 3, 4, 5]; // outra forma de declarar um array

numeros.push(6, 7); // adiciona elementos ao array
numeros.pop(); // remove o último elemento do array
numeros.shift(); // remove o primeiro elemento do array
numeros.unshift(0); // adiciona um elemento no início do array
numeros.splice(2, 1); // remove um elemento do array a partir depois do índice 2

console.log(numeros);

let numeros_ro:ReadonlyArray<number> = [100, 200, 300]; // cria um array somente leitura não permitindo alterações
//numeros_ro.push(400); // erro
//numeros_ro.pop(); // erro
//numeros_ro.shift(); // erro
//numeros_ro.unshift(0); // erro
//numeros_ro.splice(2, 1); // erro
console.log(numeros_ro);