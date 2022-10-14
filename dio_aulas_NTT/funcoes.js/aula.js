//ex: 1;
    // function sayMyName(name) {
    //     console.log('My name is '+ name);
    // }
    // sayMyName('Rafaela')

//ex: 2;
    // function quadrado(valor) {
    //     return valor * valor;
    // }

    // const resposta = quadrado(10);
    // console.log(resposta)

//ex: 3;
    function incrementarJuros(valor, percentualJuros) {
        const valorDeAcrecimo = (percentualJuros/100) * valor;
        return  valor + valorDeAcrecimo;
    }

    console.log(incrementarJuros(100,15));