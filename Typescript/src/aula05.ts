//let cursos = ['Java', 'Node', 'Angular'];
let geral: any; // Tipo any aceita qualquer tipo de dado.
geral = 'João';
geral = 30.3;
geral = true;
let vteste: string | number; // Union Type pode ser de dois tipos diferentes. | = ou
vteste = 'João';
vteste = 30.3;

let cursos: string[] = [];
let valores: number[]  = [];

cursos.push('React');
valores.push(30.3);

console.log(cursos);
console.log(valores);
console.log(vteste);
console.log(geral);