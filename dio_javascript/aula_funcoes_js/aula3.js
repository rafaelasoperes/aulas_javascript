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

// if dentro de if

    function numeroPositivo2(num) {
        const ehNegativo = num < 0;
        const maiorQueDez = num > 10;

        if(ehNegativo) {
            return "Esse número é negativo!";
        } else if (!ehNegativo && maiorQueDez) {
            return "Esse número é positivo e maior que 10!"
        }

        return "Esse número é positivo!!";
    }
console.log(numeroPositivo2(11));

// switch : --Equivale a uma comparação de tipo e valor (===)
//          --Sempre precisa de um valor "default"
//          --Ideal para quando se precisa comparar muitos valores.

    function getAnimal(id) {
        switch(id) {
            case 1:
                return "cão";
            case 2: 
                return "gato";
            case 3:
                return "pássaro";
            default:
                return "peixe";
        }
    }
console.log(getAnimal(1))
console.log(getAnimal(4))
console.log(getAnimal("1"))


// for e While 
// for : loop dentro de elementos iteráveis (arrays, strings).

    function multiplicaPorDois(arr) {
        let multiplicados = [];

        for(let i = 0; i < arr.length; i++) {
            multiplicados.push(arr[i] * 2);
        }
        return multiplicados;
    }

    const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros))

// for in: loop entre propriedadesenumeráveis de um objeto
//ex: 1;

    function forInExemplo(obj) {
        for(prop in obj) {
            console.log(prop);
        }
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade:"Salvador"
    }

console.log(forInExemplo(meuObjeto));

// for :
// ex 2:
    function forInExemplo2(obj) {
        for(prop in obj) {
            console.log(obj[prop]);
        }
    }

    const meuObjeto2 = {
        nome: "João",
        idade: "20",
        cidade:"Salvador"
    }

console.log(forInExemplo2(meuObjeto2));

// for  of : loop entre estruturas interáveis (arrays, strings).

//ex 1: 

    function logLetras(palavra) {
        for(letra of palavra) {
            console.log(letra);
        }
    }

    const palavra = "abacaxi"

console.log(logLetras(palavra))

//ex 2:

    function logNumeros(nums) {
        for(num of nums) {
            console.log(num);
        }
    }

    const nums = [30, 20, 233, 2];

console.log(logNumeros(nums))

//While : Executa instruções até que a condição se torne falsa.

function exemploWhile() {
    let num = 0

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

console.log(exemploWhile())

// do While : Ele faz o mesma coisa do while, porém a primeira execução sempre ocorre.
//ex 1:

    function exemploDoWhile() {
        let num = 0;

        do {
            console.log(num);
            num++;
        } while(num <= 5)
    }

console.log(exemploDoWhile());

//ex 2:

    function exemploDoWhile2() {
        let num = 6;

        do {
            console.log(num);
            num++;
        } while(num <= 5)
    }

console.log(exemploDoWhile2());




