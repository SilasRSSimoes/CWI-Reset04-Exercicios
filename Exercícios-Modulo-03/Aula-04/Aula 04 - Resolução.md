# CWI-Reset04-Exercícios-Módulo-03

Projeto CWI Reset 4ª edição. 


# Exercícios Módulo 3 - Lógica de programação 
## Aula 04 - Variaveis 

### Exercício:
1. Repare na variável `apresentacao` mostrada a seguir. Ela é uma `string` que representa um texto que pode mudar conforme o valor de outras variáveis.

Identifique e crie todas as variáveis necessárias para que o texto de `apresentacao` seja exibido sem erros. Depois, crie a variável `apresentacao` exatamente como mostrado a seguir e a imprima da seguinte forma: 'console.log(apresentacao).

_A baixo segue o codigo escrito no editor de código VSCode anexados a pasta "Aula 04"_


```javascript
let nomeCompleto = "Silas Rafael"
let apelido = "Silascou"
let idade = "33"
let dataNascimento = "11/11/1988"
let localNascimento = "Porto Alegre"
let altura = "1.76"
let trabalhando = "true"

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao)```
