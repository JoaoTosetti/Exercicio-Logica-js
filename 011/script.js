let peso_pescado
let peso_limite = 50
let excesso
let multa = 4
let total_multa

console.log("Informe a quantidade de peixes em quilos")
peso_pescado = 98

excesso = peso_pescado - peso_limite
total_multa = multa * excesso

console.log("O valor da multa é :", total_multa)