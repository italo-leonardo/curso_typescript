// NULL - UNDEFINED - UNKNOWN


// NULL - Tipo Nulo
// UNDEFINED - Tipo indefinido
// UNKNOWN - Tipo desconhecido

let vNome: string|null;
vNome = null;
console.log(vNome); // null ou seja, não foi atribuído valor

let vNome2: any;
console.log(vNome2); // undefined - não foi atribuído valor

let vNome3: unknown = 10;
console.log(vNome3); // undefined - não foi atribuído valor

//let vnum: number = vNome3; // erro de compilação
//console.log(vnum); // undefined - não foi atribuído valor