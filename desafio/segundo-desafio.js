// Faça um programa para calcular o valor de uma viagem.
// Você terá 5 variáveis, são elas: 
// 1- Preço do etanol;
// 2- Preço da gasolina;
// 3- O tipo de combustível que está no seu carro;
// 4- Gasto médio de combustível do carro por Km;
// 5- Distância em Km da viagem;
// Imprima no console o valor da viagem.
// Sabendo que gasoluna é 1 e etanol é 2:

function calculaGastoDaViagemFlex(distanciaDaViagemEmKm, gastoMedioKmPorLitro, precoDoEtanol, precoDaGasolina, combustivelDoCarro){
    let gastoTotalDeCombustivel = distanciaDaViagemEmKm / gastoMedioKmPorLitro;

    if(combustivelDoCarro === 2){
    custoViagem = gastoTotalDeCombustivel * precoDoEtanol;
    console.log(custoViagem.toFixed(2));
    }
    else if (combustivelDoCarro === 1){ 
        custoViagem = gastoTotalDeCombustivel * precoDaGasolina;
        console.log(custoViagem.toFixed(2));
    }
    else{
        console.log('Esse carro não aceita ' + combustivelDoCarro);
    }
}

calculaGastoDaViagemFlex(700, 10, 4.1, 7, 1)


// Calculando o uso do combustível de acordo com a eficiência do etanol ou da gasolina:

function calculaMelhorCombustivel(distanciaDaViagemEmKm, gastoMedioKmPorLitro, precoDoEtanol, precoDaGasolina){
    let gastoTotalDeCombustivel = distanciaDaViagemEmKm / gastoMedioKmPorLitro;

    if( precoDoEtanol / precoDaGasolina > 0.7) {
        custoViagem = gastoTotalDeCombustivel * precoDaGasolina;
        console.log(custoViagem.toFixed(2));
    }
    
    else {
        custoViagem = gastoTotalDeCombustivel * precoDoEtanol;
        console.log(custoViagem.toFixed(2));
    }
}

calculaMelhorCombustivel(500, 15, 4.1, 7);