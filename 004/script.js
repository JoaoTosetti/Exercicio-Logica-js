function calcular_media() {
    let n1 = document.querySelector("#nota1").value
    let n2 = document.querySelector("#nota2").value
    let n3 = document.querySelector("#nota3").value
    let n4 = document.querySelector("#nota4").value
    let media
    media = parseFloat(media)
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    n4 = parseFloat(n4)
    media = (n1 + n2 + n3 + n4)/4
    
    /*console.log("Escreva a primeira nota:")
    console.log("Escreva a segunda nota:")
    console.log("Escreva a terceira nota:")
    console.log("Escreva a quarta nota:") */
    document.querySelector("#resultado").innerHTML = "Sua média é: " + media

}

