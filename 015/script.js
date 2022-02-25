function dirigir(idade=0) {
    console.log("Informe sua idade:")
    
    if (idade > 18) {
        console.log("Você é maior de idade")
    } else {
        console.log("Você não pode dirigir")
    }
}

dirigir(17)