
// 3- Considerado o preço normal de etiquera e a escolha da condição de pagamento, utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado:

// - A vista débito, recber 10% de desconto;
// - A visto no dinheiro ou PIX, receber 15% de desconto;
// - Crédito em até 2x, preço da etiqueta sem juris;
// - Acima de 2x, preço da etiqueta+10% de juros;

// Conhecendo a máscara: debito === 1; dinheiro === 2; PIX === 3; credito === 4;

function aplicaDesconto(precoEtiqueta, desconto){
    return precofinal = precoEtiqueta - (precoEtiqueta * (desconto /100))
}

function aplicaJuros(precoEtiqueta, juros){
    return precofinal = precoEtiqueta + (precoEtiqueta * (juros /100))
}

function verificaValorPago(precoEtiqueta, modoDePagamento, parcelas){
    if(modoDePagamento === 1 && parcelas === 0){
        aplicaDesconto(precoEtiqueta, 10);
        console.log('Total a pagar de: ' + precofinal + ' reais.');
    } 
    else if(modoDePagamento === 2 || modoDePagamento === 3 && parcelas === 0){
        aplicaDesconto(precoEtiqueta, 15);
        console.log('Total a pagar de: ' + precofinal + ' reais.');
    }
    else if(modoDePagamento === 4 && parcelas <= 2){
        aplicaDesconto(precoEtiqueta, 0);
        console.log('Total a pagar de: ' + precofinal + ' reais.');
    }
    else if(modoDePagamento === 4 && parcelas > 2){
        aplicaJuros(precoEtiqueta, 10);
        console.log('Total a pagar de: ' + precofinal.toFixed(1) + ' reais.');
    }
    else{
        console.log('Método de pagamento inválido, tende novamente.');
    }
} 

verificaValorPago(100, 3, 1);
