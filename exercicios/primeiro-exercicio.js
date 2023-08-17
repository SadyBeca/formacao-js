// Dada 3 notas de um aluno em um semestre, calcule a sua média e a sua classificação conforme a tabela abaixo.
// Classificação: - <5 = reprovação; 5-7, recuperação; >7; passou de semestre;

function calculaMediaNotas([notas]){
    let media = 0;
    for(let i = 0; i < notas.length; i += 1){
        media += notas[i] / notas.length;
    }
    
    if(media > 7){
        console.log('Você passou de semestre!');
    }
    else if(media >= 5 && media <= 7){
        console.log('Você está em recuperação!');
    }
    else if(media >= 0 && media < 5){
        console.log('Você foi reprovado!');
    }
    else{
        console.log('Número inválido, cheque as notas por favor, elas devem ser números entre 0-10');
    }
}

calculaMediaNotas([5, 6,3])


