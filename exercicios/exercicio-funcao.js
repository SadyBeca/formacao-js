function escreveMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificaIdade(idade, nome){
    if(idade >= 18){
        console.log(escreveMeuNome(nome) + ' e eu sou maior de iade!');
    }
    else{
        console.log(escreveMeuNome(nome) + ' e eu sou menor de idade!');
    }
}

verificaIdade(25, 'Matheus');

