function aprovacao(nota1=0, nota2=0) {
    let media

    console.log("Para calcular sua média, digite sua primeira nota:")
    console.log("Agora sua segunda nota:")

    media = (nota1 + nota2)/2

    if (media >= 5) {
        console.log("Aprovado com", media, "de média!")
    } else {
        console.log("Reprovado com", media, "de média.")
    }
}

aprovacao(5.6,5.4)