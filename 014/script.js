let horas
let ganho
let salario_bruto
let ir 
let valor_ir
let inss
let valor_inss
let sindicato
let valor_sindicato
let salario_sindicato
let salario_liquido

valor_ir = 11
valor_inss = 8
valor_sindicato = 5

console.log("Digite quantas horas você trabalha por mês:")
horas = 80
console.log("Agora informe quanto você recebe por hora:")
ganho = 10

salario_bruto = horas * ganho

ir = salario_bruto * (valor_ir / 100)
inss = salario_bruto * (valor_inss / 100)
sindicato = salario_bruto * (valor_sindicato / 100)

salario_liquido = (salario_bruto - inss - sindicato - ir)

console.log("+ Salário Bruto : R$", salario_bruto)
console.log("- IR (11%) : R$", ir)
console.log("- INSS (8%) : R$", inss)
console.log("- Sindicato (5%) : R$", sindicato)
console.log("= Salário Líquido", salario_liquido)