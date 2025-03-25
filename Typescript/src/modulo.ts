import Pessoa, {objeto, Coisa } from "./classes"; // importando mais de um arquivos feitos
//import { objeto } from "./classes"; // importando arquivo feito

const p1 = new Pessoa('Pedro', 1.67);
const ob1 = new objeto('Bola')

console.log(p1)
console.log(ob1)
console.log(Coisa)