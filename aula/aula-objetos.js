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

// const rebeca = new Pessoa();
// rebeca.nome = 'Rebeca Ribeiro';
// rebeca.idade = 25;

// const matheus = new Pessoa();
// matheus.nome = 'Matheus';
// matheus.idade = 26;

// console.log(rebeca, matheus);

function comparaPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
    }
    else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`);
    }
    else{
        log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

comparaPessoa(rebeca, matheus);
