function  f_teste<T, U>(v:T, r:U):T{
    return v
} // funcao GENERICS voce pode escolhe o tipo da funcao

// console.log(f_teste<number, string>(10, "10")) // define um tipo 
// console.log(f_teste<string, boolean>("Teste", false))
// console.log(f_teste<boolean, number>(true, 10))

class C_teste<T>{
    public valor: T

    constructor(valor: T){
        this.valor = valor
    };
} // criacao de classe com valores generico 

const ct1 = new C_teste<number>(1)
const ct2 = new C_teste<boolean>(true)

console.log(ct1);
console.log(ct2);
