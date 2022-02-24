function maiorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log("O maior número é", n1)
    } else if (n2 > n1 && n2 > n3) {
        console.log("O maior número é", n2)
    } else if (n3 > n1 && n3 > n2) {
        console.log("O maior número é", n3)
    }
}
maiorNumero(645,186354,236)

function soma(n1=0, n2=0) {
    console.log(n1 + n2)
}
soma(2,5)