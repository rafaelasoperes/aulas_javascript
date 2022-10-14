//Exemplo: 1;
// const pessoa = {
//     nome: 'Rafaela S',
//     idade: 25,

//     descrever: function (){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`)
// }

// pessoa.descrever ();


// Exemplo: 2;
// class Pessoa {
//     nome;
//     idade;

//     descrever(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// const rafa = new Pessoa();
// rafa.nome = 'Rafaela Peres';
// rafa.idade = 25;

// const glelson = new Pessoa();
// glelson.nome = 'Glelson Peres';
// glelson.idade = 29;

// rafa.descrever();
// glelson.descrever();

//Exemplo: 3;

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2022 - idade;
//     }

//     descrever(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// const rafa = new Pessoa('Rafa', 25);
// const glelson = new Pessoa ('Glelson', 29);

// console.log(rafa);
// console.log(glelson)

// Exemplo 4
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }
    else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const rafa = new Pessoa('Rafa', 25);
const glelson = new Pessoa ('Glelson', 29);

compararPessoas(rafa, glelson)