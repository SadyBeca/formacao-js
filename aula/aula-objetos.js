const rebeca = {
    nome: 'Rebeca Ribeiro',
    idade: 25,

    descrever: function(){
        console.log(`Meu nome é ${this.nome}`);
    }

}

rebeca.dizAIdade = function (){
    console.log(`Minha idade é ${this.idade}`);
}

rebeca.descrever() + rebeca.dizAIdade();

rebeca['corFavorita'] = 'laranja';
rebeca['idade'] = 26

console.log(rebeca['corFavorita'], rebeca['idade']);


