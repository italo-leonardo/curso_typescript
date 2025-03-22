enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

//console.log(dias.domingo); // 0 valor
//console.log(dias[1]); // domingo chave
//console.log(dias["domingo"]); // 0 valor

const d = new Date();
//console.log(d);
//console.log(d.getDate()); // dias do mes de 1 a 31
//console.log(d.getDay()); // dias da semana de 0 a 6
//console.log(dias[d.getDay()]); // dias da semana de domingo a sabado levando em consideração o enum

enum cores {
    vermelho = '#FF0000', 
    verde = '#00FF00',
    azul = '#0000FF',
    amarelo = '#FFFF00',
    roxo = '#800080', 
}

//console.log(cores.vermelho); // retorna o valor da chave vermelho

enum tipoUsuario {
    admin,
    user,
    author 
} // enum sem valores numéricos definidos

console.log(tipoUsuario.admin); // retorna o valor da chave admin