// Tema Funções

// Tipos de paramentros

//Valores Padrões
// São os que você passa dentro da sua função.

// Spreed: com essa técnica, o que era parte de um array se torna um elemento independente;
// ex: os ... na chamada da função, fazem com que o array seja separado unitariamente e adicionado a chamada da função.
    function sum(x, y, z) {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));

// Rest: Combina os argumentos em um array
// O que era um elemento independente se torna parte de um array.

    function confereTamanho(...args) {
        console.log(args.length)
    }
    confereTamanho()
    confereTamanho(1, 2)
    confereTamanho(3, 4, 5)

// Object Destructuring : Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
            firstName: 'Jonh',
            lastName: 'Doe'
        }
    };
    function userId({id}) {
        return id;
    }
    function getFullName({fullName: {firstName: first, lastName: last}}) {
        return `${first} ${last}`;
    }

    console.log(userId(user))
    console.log(getFullName(user))
    