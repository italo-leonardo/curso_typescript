class computado {
    private id: number;
    public nome: string; // Atributo público que pode ser acessado fora da classe computador
    private ram: number;
    private cpu: number; // Atributo privado que só pode ser acessado dentro da classe computador
    protected ligado: boolean; // Atributo protegido que pode ser acessado por classes filhas

    constructor(nome: string, ram: number, cpu: number, ligado: boolean) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
        this.id = 0;
    } // Método construtor que inicializa os atributos da classe computador

    info(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado? 'Sim': 'Não'}`);
        console.log('-------------------');
    } // Método info() que exibe as informações do computador

    ligar(): void {
        this.ligado = true;
    } // Método ligar() que liga o computador

    desligar(): void {
        this.ligado = false;
    } // Método desligar() que desliga o computador

    upRam(qtde:number): void {
        if (qtde >= 0 && qtde <= 1000){
            this.ram = qtde;
            console.log(`RAM do computador ${this.nome} aumentada para ${qtde}`);
        } else {
            console.log(`Quantidade ${qtde} inválida para o computador ${this.nome}`);
        }
    } // Método upRam() que aumenta a quantidade de RAM do computador

}

// Instanciando a classe computado
const Compt_1= new computado('Rapidao', 64, 10, true); // new computado() é a instanciação da classe computado
const Compt_2 = new computado('Lentao', 32, 5, true); // Compt_2 é um objeto do tipo computado
const Compt_3 = new computado('Médio', 128, 15, true); // Compt_3 é um objeto do tipo computado

Compt_1.desligar(); // Desliga o computador Compt_1
Compt_2.ligar(); // Liga o computador Compt_2

Compt_1.upRam(128) // Aumenta a RAM do computador Compt_1 para 0


Compt_1.info();
Compt_2.info();
Compt_3.info();

