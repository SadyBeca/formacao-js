// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis, são elas: 
// 1- Preço do combustível;
// 2- Gasto médio de combustível do carro por Km;
// 3- Distância em Km da viagem;
  
function calculaGastoDaViagem(distanciaDaViagemEmKm, gastoMedioKmPorLitro, precoDoComustivelReaisPorLitro){
    let totalDeLitros = distanciaDaViagemEmKm / gastoMedioKmPorLitro;
    let gastoDaViagem = precoDoComustivelReaisPorLitro * totalDeLitros; 
    console.log(gastoDaViagem.toFixed(2));
}

calculaGastoDaViagem(700, 10, 5.98);