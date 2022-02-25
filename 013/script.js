function peso(genero="", altura=0) {
    let peso_ideal

    console.log("Qual seu gênero?")

    if (genero == "homem") {
        console.log("Digite sua altura:")

        peso_ideal = (72.7 * altura) - 58
        console.log("Seu peso ideal seria :", peso_ideal)
    } else if (genero == "mulher") {
        console.log("Digite sua altura:")

        peso_ideal = (62.1 * altura) - 44.7
        console.log("Seu peso ideal seria :", peso_ideal)
    }
}

peso("mulher", 1.90)