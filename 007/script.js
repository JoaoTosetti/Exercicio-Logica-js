function area_dobro() {
    let area
    let area2 
    let b = document.querySelector("#base").value
    let h = document.querySelector("#altura").value
    area = parseFloat(area)
    area2 = parseFloat(area2)
    b = parseFloat(b)
    h = parseFloat(h)
    area = b * h
    area2 = area * 2

    document.querySelector("#resultado").innerHTML = "A área desse quadrado é " + area + "cm²" + " e o dobro da área é " + area2 + "cm²"
    /*console.log("Para descobrir a área do quadrado nos informe o valor da sua base: ")
    console.log("Agora precisamos do valor da sua altura: ")
    area = b * h
    console.log("O dobro da área desse quadrado é ", area*2, "cm²")*/
}
