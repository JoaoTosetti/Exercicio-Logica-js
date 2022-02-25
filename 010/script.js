function fahrenheit(temp_c=0){
    let temp_f
    console.log("Informe a temperatura em graus Celsius para transformá-la em Fahrenheit:")
    temp_f = (temp_c * 9/5) + 32
    console.log(temp_c, "celsius em Fahrenheit é:", temp_f)
}

fahrenheit(98)