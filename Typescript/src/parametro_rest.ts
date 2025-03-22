function fsoma(...n: number[]){
    let soma: number = 0;
    for (let en of n){
        if (en == 40) {
            continue;
        } else {
        soma += en
    };
    }
    // n.forEach((num) => {
    //     soma += num;
    // });
    return soma;
} // funcao que recebe um numero variavel de parametros

console.log(fsoma(10, 20, 40, 50)); 