
// 3- Considerado o preço normal de etiquera e a escolha da condição de pagamento, utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado:

// - A vista débito, recber 10% de desconto;
// - A visto no dinheiro ou PIX, receber 15% de desconto;
// - Crédito em até 2x, preço da etiqueta sem juris;
// - Acima de 2x, preço da etiqueta+10% de juros;

let precoEtiqueta = 100;
let modoDePagamento = 'debito';
let parcelas = 4;
let precofinal;

if(modoDePagamento === 'debito' && parcelas === 0){
    precofinal = precoEtiqueta * 0.9;
    console.log('Total a pagar de: ' + precofinal + ' reais.');
} 
else if(modoDePagamento === 'dinheiro' || modoDePagamento === 'PIX' && parcelas === 0){
    precofinal = precoEtiqueta * 0.85;
    console.log('Total a pagar de: ' + precofinal + ' reais.');
}
else if(modoDePagamento === 'credito' && parcelas <= 2){
    precofinal = precoEtiqueta;
    console.log('Total a pagar de: ' + precofinal + ' reais.');
}
else if(modoDePagamento === 'credito' && parcelas > 2){
    precofinal = precoEtiqueta * 1.1;
    console.log('Total a pagar de: ' + precofinal.toFixed(1) + ' reais.');
}
else{
    console.log('Método de pagamento inválido, tende novamente.');
}