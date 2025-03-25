// let [aa, bb, cc, dd] = [10,20, 30, 40]

const obj = {
    cor1: 'Verde',
    cor2: 'Amarelo',
    cor3: 'Azul',
    cor4: 'branco'
}

let {cor1, cor2, cor3, cor4} = obj // Desentruturacao de objetos

// let [nu1 = 0, nu2 = 0, nu3 = 0] = [10]

let [nu1 = 0, nu2 = 0,...nu3] = [10,20, 30,40,50,60,70] // ... transforma em um arrey 

const fcores = () => {
    return ['Verde', 'Amarelo', 'Azul', 'Branco']
}

let texto = 'Curso de Typescript'
let [...t] = texto.split(" ")

let [co1, co2, co3, co4] = fcores()

// console.log(co1)
// console.log(co2)
// console.log(co3)
// console.log(co4)

console.log(t)