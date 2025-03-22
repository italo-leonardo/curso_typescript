function Soma(n1:number=0, n2:number=0):number{
    return n1 + n2;
} // Função que retorna um número com valores padrão

console.log(Soma(5)); 

function novoUser(user: string, pass : string, nome?: string): void {
    let dados = {user, pass, nome};
    console.log(dados);
} // Função que não retorna nada com um parâmetro opcional, [?] se não for passado.

novoUser('admin', '124'); // declaração sem o parâmetro opcional
novoUser('admin', '124', 'Admin'); // declaração com o parâmetro opcional