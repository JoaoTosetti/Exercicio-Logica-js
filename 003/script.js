function somar(n1=0,n2=0,) {
    let soma
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    soma = n1 + n2
    document.querySelector("#resultado").innerHTML = "A soma dos dois números é : " + soma
}