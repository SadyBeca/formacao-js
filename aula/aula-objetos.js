class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }


    descrever(){
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade} anos.`);
    }

}

const rebeca = new Pessoa('Rebeca', 26);
const matheus = new Pessoa('Matheus', 27);

console.log(rebeca, matheus);

// const rebeca = new Pessoa();
// rebeca.nome = 'Rebeca Ribeiro';
// rebeca.idade = 25;

// const matheus = new Pessoa();
// matheus.nome = 'Matheus';
// matheus.idade = 26;

// console.log(rebeca, matheus);


