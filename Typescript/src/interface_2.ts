interface curso {
    titulo: string;
    des: string;
    iniciarCuso?(testo: string):void

} // Criacao de uma interface curso

interface cursoProg extends curso {
    aula: number;
    maxAlunos: number;
} // Criacao de uma extends do curso 

interface cursoArtes extends curso {
    aula: number;
    maxAlunos: number;
}

let curso_1: cursoProg
let curso_2: cursoArtes


curso_1 = {titulo: "Typescript",des: "Curso de Typescript",aula: 100,maxAlunos: 50} // atriduir valores ao objeto
curso_2 = {titulo: "C++",des: "Curso de C++",aula: 200,maxAlunos: 50} // atriduir valores ao objeto

console.log(curso_1)
console.log(curso_2) //

