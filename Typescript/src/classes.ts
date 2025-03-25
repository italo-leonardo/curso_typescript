// export const Coisa = ['Corda', 'Pilha', 'Lampada', 'Chaves']
// export class Pessoa{
//     nome:string;
//     altura: number;

//     constructor(nome: string, altura: number){
//         this.nome = nome;
//         this.altura = altura
//     }
// } // Exportando arquivos para serem reutilizados

// export class objeto {
//     nome: string;

//     constructor(nome: string){
//         this.nome = nome;
//     }
// } // Exportando item por item

const Coisa = ['Corda', 'Pilha', 'Lampada', 'Chaves']
class Pessoa{
    nome:string;
    altura: number;

    constructor(nome: string, altura: number){
        this.nome = nome;
        this.altura = altura
    }
} // Exportando arquivos para serem reutilizados

class objeto {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

export default Pessoa

export {Coisa, objeto}