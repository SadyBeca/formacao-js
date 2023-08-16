// 2- Elabore um algoritmo que dado o peso e altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

// - Abaixo de 18,5: abaixo do peso;
// - Entre 18,5-25: peso adequado;
// - Entre 25-30: acima do peso;
// - Entre 30-40: Obesidade;
// - Acima de 40: Obesidade Grave.

let alturaEmMetros = 1.7;
let pesoEmKg = 83.2;

let imc = pesoEmKg / (alturaEmMetros ** 2);

if(imc < 18.5){
    console.log('Seu imc é ' + imc.toFixed(2));
    console.log('Você está Abaixo do peso.');
}
else if(imc >= 18.5 && imc < 25){
    console.log('Seu imc é ' + imc.toFixed(2));
    console.log('Você está com o peso adequado.');
}
else if(imc >= 25 && imc < 30){
    console.log('Seu imc é ' + imc.toFixed(2));
    console.log('Você está acima do peso.');
}
else if(imc >= 30 && imc < 40){
    console.log('Seu imc é ' + imc.toFixed(2));
    console.log('Você está com obesidade.');
}
else{
    console.log('Seu imc é ' + imc.toFixed(2));
    console.log('Você tem obesidade grave');
}