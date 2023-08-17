/* Crie uma classe para representar carros.
Os carros possuem as características:
1- uma marca;
2- uma cor;
3- um gasto médio de combustível por Km rodados;

Crie um método que dado a quantidade de Km e o preço do combustível, nos dê o valor gasto em reais para realizar esse percurso.
 */

class Carros {
    marca;
    cor;
    gastoCombustivelPorKm;

    constructor(marca, cor, gastoCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelPorKm = gastoCombustivelPorKm;
    }

    custoViagem(precoCombustivel, distanciaPercorrida){
        let litrosGastos = distanciaPercorrida / this.gastoCombustivelPorKm;
        return precoCombustivel * litrosGastos;
    }

}

const uno = new Carros('fiat', 'verde', 13);
const fit = new Carros('honda', 'prata', 11);
const hb20 = new Carros('hyundai', 'preto', 14);




console.log((hb20.custoViagem(5.9, 500).toFixed(2)));
console.log((uno.custoViagem(5.9, 500).toFixed(2)));
console.log((fit.custoViagem(5.9, 500).toFixed(2)));
