altura = 1.76
peso = 71.00

imc = peso / (altura * altura)

conceito = ""
grau = 0

if (imc < 18.5)
{
    conceito = "Magro"
} 
else if (imc < 24.99)
{
    conceito = "Normal"   
}
else if (imc < 29.99)
{
    conceito = "Sobrepeso"   
    grau = 1
}
else if (imc < 39.99)
{
    conceito = "Obesidade"
    grau = 2   
}
else if (imc >= 40.00)
{
    conceito = "Obesidade Grave" 
    grau = 3
      
}


console.log("O seu IMC é", imc)
console.log("Sua classificação é", conceito)

if (grau > 0)
{
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}


if (grau == 3)
   {
   console.log("É importante procurar um médico para avaliar sua saúde.")
   }
