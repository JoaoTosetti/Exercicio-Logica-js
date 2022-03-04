function maiorNumero(n1, n2, n3) {
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    if (n1 > n2 && n1 > n3) {
        document.querySelector("#resultado").innerHTML = "O maior número é " + n1
    } else if (n2 > n1 && n2 > n3) {
        document.querySelector("#resultado").innerHTML = "O maior número é " + n2
    } else if (n3 > n1 && n3 > n2) {
        document.querySelector("#resultado").innerHTML = "O maior número é " + n3
    }
}