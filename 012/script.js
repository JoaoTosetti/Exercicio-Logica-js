function peso(altura=0) {
    let peso_ideal

    console.log("Informe sua altura para saber seu peso ideal:")
    peso_ideal = (72.7 * altura) - 58
    console.log("Seu peso ideal seria", peso_ideal)
}

peso(1.89)