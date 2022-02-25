function multaValor(peso_pescado=0, peso_limite=50, multa=4) {
    let excesso
    let total_multa
    
    console.log("Informe a quantidade de peixes em quilos:")
    excesso = peso_pescado - peso_limite
    total_multa = multa * excesso
    console.log("O valor da multa é de R$", total_multa)
}

multaValor(98)