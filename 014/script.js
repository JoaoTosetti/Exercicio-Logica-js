function salario(horas=0, ganho=0, valor_ir=11, valor_inss=8, valor_sindicato=5) {
    let salario_bruto
    let ir 
    let inss
    let sindicato
    let salario_liquido

    console.log("Digite quantas horas você trabalha por mês:")
    console.log("Agora informe quanto você recebe por hora:")
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
}

salario(150,36)