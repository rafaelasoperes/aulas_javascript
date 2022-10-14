console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista.

listaDeDestinos.splice(1,1) // o splice remove um item ou mais da lista, mas você deve passar o indice do elemento e a quntidade de elementos apartir desse indice.
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
console.log(listaDeDestinos[1])