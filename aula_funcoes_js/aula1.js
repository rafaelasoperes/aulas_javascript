// Tipos de Funções

//os consoles.log foram apenas para passar a informação para o terminal

//função estrutura básica
        //   nome | Paramentros
    function soma (a, b) {
    //return significa que vai retornar um valor
        return a + b;
    }
    console.log (soma(3,2));

// função anônima : é uma função que não recebe nome, e pode ser armazenada dentro de uma váriavel
// ex:
    const soma2 = function (a, b) {
        return a + b;
    }
    console.log (soma2(5,2));

// função autoinvocável : É uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
// ela pode ser passada com parametros ou armazenada dentro de uma variavel.

console.log (
    (
        function() {
            let name = "Digital Innovation One"
            return name;
        }
    )()
)

//Callbacks : São funções passadas como argumento para outra.

const calc = function(operacao,num1,num2) {
    return operacao(num1, num2);
}

const soma3 = function(num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma3, 1, 2);
const resultSub = calc(sub,1, 2);

console.log(resultSoma);
console.log(resultSub);
