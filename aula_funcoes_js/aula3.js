 // aula de loops
 // aula de If/Else , Switch. For e While

 // Ex. de if/else clear code.

 function numeroPositivo(num) {
    let resultado;
    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}
 console.log(numeroPositivo(-5))