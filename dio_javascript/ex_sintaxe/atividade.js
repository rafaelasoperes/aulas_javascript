
function resultadoCompleto (num1, num2) {
    var comparaNum = compara(num1, num2);
    var somaNum = soma(num1, num2);
    return `${comparaNum}  ${somaNum}`;
}

function compara (num1, num2) {
    if (num1 == num2) {
       return `Os números ${num1} e ${num2} são iguais.`
    } else {
       return `Os números ${num1} e ${num2} não são iguais.`
    }
}

function soma (num1, num2) {
    var resultado = num1 + num2;

    if (resultado < 10 ){
        return `sua soma é ${resultado}, menor que 10 e menor que 20.`
    } 
    else if (resultado == 10 && resultado < 20) {
        return `sua soma é ${resultado}, igual a 10 e menor que 20.`
    } 
    else if (resultado > 10 && resultado == 20) {
        return `sua soma é ${resultado} maior a 10 e igual que 20.`
    }
    else if (resultado >= 11 && resultado < 20) {
        return `sua soma é ${resultado}, maior que 10 e menor que 20.`
    } 
    else {
        return `sua soma é ${resultado}, maior que 10 e maior que 20.`
    }
}

console.log(resultadoCompleto(10, 11));