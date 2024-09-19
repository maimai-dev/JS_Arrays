// 1- 

const array1 = ['maiara', 'fernanda', 'larissa'];
const array2 = [0, 40, 50];

const arraysJuntas = array1.concat(array2);
console.log(arraysJuntas);

// 2 - 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);
console.log(parteNumeros);

// 3 - 

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
const addFrutas = frutas.splice(2, 2, 'Kiwi', 'Pessego')
console.log(frutas);

// 4 - 

const menuPrincipal = ['Frango', 'Arroz', 'Feijão'];
const menuDeSobremesas = ['Mousse', 'Bolo', 'Chocolate'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);


