function centimetros() {
    let metro = document.querySelector("#metro").value
    let centimetro

    centimetro = parseFloat(centimetro)
    metro = parseFloat(metro)
    centimetro = metro * 100
    
    document.querySelector("#resultado").innerHTML = "O valor em centímetro é: " + centimetro + "cm"
    /* console.log("Digite um valor em metros para saber em centímetros:")
    console.log("O número em centímetros é ", metro*100, "cm")*/
}