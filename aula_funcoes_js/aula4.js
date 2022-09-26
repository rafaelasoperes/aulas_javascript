 //Aula sobre this
 //this: a palavra resevrvada this é uma referência de contexto.

 // Seu valor muda de acordo com o lugar no código onde foi chamada;
//contexto
//em:
//Um objeto(método) - ela se referência ao próprio objeto dono do método.
//Sozinha - Objeto global (em navegadores, window) .
//Função - Objeto global.
//Evento - Elemento que recebeu o evento.

    const pessoa = {
        firstName: "André",
        lastName : "Soares",
        id       : 1,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        },
        getId : function() {
            return this.id;
        }
    }

    console.log(pessoa.fullName());
    console.log(pessoa.getId());

//método call : com ele você pode chamar a função que o this esta sendo colocado.
//ela tbm pode ser passada em funções com parametros
    const pessoa1 = {
        nome: 'Miguel',
    };
    const animal = {
        nome: 'Murphy',
    };
    function qualquerNome() {
        console.log(this.nome);
    }
    console.log(qualquerNome.call(pessoa1));

//ela tbm pode ser passada em funções com parametros

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

console.log(soma.call(myObj, 1, 5))


//método apply : com ele você pode chamar a função que o this esta sendo colocado igual ao método call.
//Mas nas funções que recebem parametro ,só é possivel chamar dentro de um array.

const myObj2 = {
    num1: 2,
    num2: 4,
};

function soma2(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

console.log(soma2.apply(myObj2, [1, 5]))

// Bind - Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

console.log(bruno())
