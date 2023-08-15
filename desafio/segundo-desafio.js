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

const precoDoEtanol2 = 5.1;
const precoDaGasolina2 = 6.4;
let gastoMedioKmPorLitro3 = 15;
let distanciaDaViagemEmKm3 = 500;
let combustivelDoCarro2 = 'x';
let custoViagem2;

let gastoTotalDeCombustivel2 = distanciaDaViagemEmKm3 / gastoMedioKmPorLitro3;

if( precoDoEtanol2 / precoDaGasolina2 > 0.7) {
    custoViagem2 = gastoTotalDeCombustivel2 * precoDaGasolina2;
    console.log(custoViagem2.toFixed(2));
}

else {
    custoViagem2 = gastoTotalDeCombustivel2 * precoDoEtanol2;
    console.log(custoViagem2.toFixed(2));
}