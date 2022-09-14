let nomeCompleto = "Silas Rafael"
let apelido = "Silascou"
let idade = "33"
let dataNascimento = "11/11/1988"
let localNascimento = "Porto Alegre"
let altura = "1.76"
let trabalhando = "true"

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao)