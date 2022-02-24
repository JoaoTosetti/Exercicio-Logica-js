let genero
let altura
let peso_ideal

console.log("Qual seu gênero?")
genero = "homem"

if (genero == "homem") {
    console.log("Digite sua altura :")
    altura = 1.90

    peso_ideal = (72.7 * altura) - 58
    console.log("Seu peso ideal seria :", peso_ideal)
}
else {
    console.log("Digite sua altura :")
    altura = 1.20

    peso_ideal = (62.1 * altura) - 44.7
    console.log("Seu peso ideal seria :", peso_ideal)
}