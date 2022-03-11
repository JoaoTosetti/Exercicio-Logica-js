function calcular_area() {
    let raio = document.querySelector("#raio").value
    let area
    raio = parseFloat(raio)
    area = parseFloat(area)
    area = (raio * raio) * 3.14

    document.querySelector("#resultado").innerHTML = "A área desse circulo é " + area + "cm²"


    /*console.log("Informe o raio do círculo:")
    console.log("A área desse círculo é", (raio * raio) * 3.14, "cm²")*/
}

