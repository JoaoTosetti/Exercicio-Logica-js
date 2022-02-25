function celsiu(temp_f=0) {
    let temp_c
    console.log("Informe a temperatura em Fahrenheit para transformá-la em Celsius :")
    temp_c = 5 * ((temp_f - 32) / 9)
    console.log(temp_f, "fahrenheit em graus Celsius é :", temp_c)
}

celsiu(99)