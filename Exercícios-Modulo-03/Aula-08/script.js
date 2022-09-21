//Exercícios 01

// const dados = [ "d4", "d6", "d8", "d10", "d12"]
// for (const conjunto of dados)
// {
//     console.log(conjunto)
// }

//Exercícios 02


// num = [1,1,2,3,5,8,13]

// soma = 0 
// for (index = 0; index < num.length; index++) {
//     soma += num[index]
// }

// media = soma / num.length
// console.log(media)


//Exercícios 03

meuNome = "Silas"
nomeComum = false 

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]


for (const elemento of nomesComuns) {
    if (meuNome == elemento) {
        nomeComun = true
        break
    }
}

if (nomeComum) {
    console.log("É um nome comum")
} else {
    console.log("Diferentão, hein?")
}

