const teste=(txt?:string): void=>{
    console.log(txt);
} // função arrow que não retorna nada tem que ser declarada antes de ser chamada

// teste('Curso de TypeScript');
// teste();

// const Soma2=(n1: number, n2: number): number=>{
//     return n1 + n2;
// }

// console.log(Soma2(13, 22));


const Soma2=(n:number[]): number=>{
    let res: number = 0;
    n.forEach((v)=>{
        res += v;
    });
    return res;
} // Função que retorna um número com um array de números array e um grande número de parâmetros

let numer: number[] = [1, 2, 3, 4, 5];
console.log(Soma2(numer)); // 15
