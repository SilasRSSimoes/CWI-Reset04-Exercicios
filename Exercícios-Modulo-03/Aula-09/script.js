//Exercício 01
function imprimir (CWI){
console.log(CWI)
}

imprimir("CWIRest-04")

//Exercício 02

/*5.1 - Verificação de igualdade de Nomes */

function mesmoNome (a,b){
    return a==b
}
 imprimir (mesmoNome("CWI", "Rest"))


 /*5.2 Verificação de Idade */

 function comparacao (idade){
        return idade >= 18
 }

 imprimir (comparacao(33))

 /*5.3 Calculo de juros a 10% do valor do Boleto */

 function boletoComJuros (valorDoBoleto,juros) {
    return valorDoBoleto * juros
 }

 imprimir (boletoComJuros(100,1.1))

 /*5.4  Calculo de média aritimética dos itens da Arry */
 soma = 0
 function media(item){
    for ( num = 0; num < item.length; num++){
        soma += item[num]
/*soma de todos os itens da arry divida pela sua quantidade*/    }
    return soma/ item.length
}

 imprimir (media([8,4,6,8,10]))

/*5.5 Cálculo da Margem Bruta da empresa com base nas vendas e nos custos dos produtos vendidos. Com o valor final multiplicado por 100 para obter o valor percentual*/
function valorPercentual (vendas, custoDosProdutos) {
    lucroBruto= vendas - custoDosProdutos
        return (lucroBruto / vendas ) *100  
}   

imprimir (valorPercentual(700,400))


//Exercício 03