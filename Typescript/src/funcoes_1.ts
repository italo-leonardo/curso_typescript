// function teste() {
//     console.log('teste');
// } // Função que não retorna nada

// function logar(user:string, pass:string): void {
//     console.log(`Usuário: ${user}`);
//     console.log(`Senha: ${pass}`);
// } // Função que não retorna nada

// logar('admin', 'admin');
// logar('teste', '001');

// function soma(a:number, b:number): number {
//     return a + b; // Retorna a soma de a e b
// } // Função que retorna um número   

// console.log(soma(1, 2)); // 3

// const res = soma(1, 2);
// console.log(res); // 3

function soma(a:number, b:number): number {
    let c = a + b;
    return c; // Retorna a soma de a e b
} // Função que retorna um número   

let n_res: number = soma(1, 2); // Atribui o resultado da função a uma variável
let s_res: string = n_res.toString(); // Converte o número para string

console.log(n_res); // 3
console.log(s_res); // '3'