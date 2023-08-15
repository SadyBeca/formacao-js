// Faça um programa para calcular o valor de uma viagem.
// Você terá 5 variáveis, são elas: 
// 1- Preço do etanol;
// 2- Preço da gasolina;
// 3- O tipo de combustível que está no seu carro;
// 4- Gasto médio de combustível do carro por Km;
// 5- Distância em Km da viagem;
// Imprima no console o valor da viagem.

const precoDoEtanol = 5.1;
const precoDaGasolina = 6.4;
let gastoMedioKmPorLitro2 = 15;
let distanciaDaViagemEmKm2 = 500;
let combustivelDoCarro = 'x';
let custoViagem;

let gastoTotalDeCombustivel = distanciaDaViagemEmKm2 / gastoMedioKmPorLitro2;

if(combustivelDoCarro === 'etanol'){
custoViagem = gastoTotalDeCombustivel * precoDoEtanol;
console.log(custoViagem.toFixed(2));
}
else if (combustivelDoCarro === 'gasolina'){ 
    custoViagem = gastoTotalDeCombustivel * precoDaGasolina;
    console.log(custoViagem.toFixed(2));
}
else{
    console.log('Esse carro não aceita ' + combustivelDoCarro);
}
