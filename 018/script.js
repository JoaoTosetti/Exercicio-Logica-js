//Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a 5 ou a mensagem "Reprovado", se a média for menor do que 5
let nota1, nota2, media

console.log("Para calcular sua média, digite sua primeira nota:")
nota1 = 5.5
console.log("Agora sua segunda nota:")
nota2 = 4.5

media = (nota1 + nota2)/2

if (media >= 5) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}