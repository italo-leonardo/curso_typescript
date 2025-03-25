interface curso {
    titulo: string;
    des: string;
    aula: number;
    maxAlunos?: number; // para deixa o paramatro como opicional 
    iniciarCuso?(testo: string):void

} // Criacao de uma interface curso

// let curso2: {
//     titulo: string;
//     des: string;
//     aula: number;
//     maxAlunos: number;
// } // Criacao de objeto

let curso1: curso // objeto segue a interface curso
let curso2: curso


curso1 = {titulo: "Typescript",des: "Curso de Typescript",aula: 100,maxAlunos: 50} // atriduir valores ao objeto
curso2 = {
    titulo: "C++",
    des: "Curso de C++",
    aula: 200,maxAlunos: 50
} // atriduir valores ao objeto

console.log(curso1)
console.log(curso2)

