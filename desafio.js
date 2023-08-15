// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis, são elas: 
// 1- Preço do combustível;
// 2- Gasto médio de combustível do carro por Km;
// 3- Distância em Km da viagem;
  


let precoDoComustivelReaisPorLitro = 5.98;
let gastoMedioKmPorLitro = 10;
let distanciaDaViagemEmKm = 700;

let totalDeLitros = distanciaDaViagemEmKm / gastoMedioKmPorLitro;

let gastoDaViagem = precoDoComustivelReaisPorLitro * totalDeLitros; 
console.log(gastoDaViagem.toFixed(2));