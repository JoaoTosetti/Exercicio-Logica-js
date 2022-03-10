function salario() {
    let salario_bruto
    let salario_liquido
    let inss
    let sindicato
    let imposto_renda

    salario_bruto = document.querySelector("#salario_bruto").value
    salario_bruto = parseFloat(salario_bruto)

    inss = salario_bruto * 8/100
    sindicato = salario_bruto * 5/100
    imposto_renda = salario_bruto * 11/100
    salario_liquido = salario_bruto - inss - sindicato - imposto_renda

    document.querySelector("#resultado").innerHTML = "Salário Bruto: R$ " + salario_bruto
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "INSS (8%): R$ " + inss
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "Sindicato (5%): R$ " + sindicato
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "Imposto de Renda (11%): R$ " + imposto_renda
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "Salário Líquido: R$ " + salario_liquido

}