const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// A primeira expressão, let indice = 0, é executada apenas uma vez.
// A segunda expressão, indice < notas.length, é a condição de execução.
// A terceira expressão, indice++, é executada sempre no final do bloco.

for (let indice = 0; indice < notas.length; indice++){
    console.log(indice, notas[indice]);
}