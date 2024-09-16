const idade = 10;
const resultado = idade >= 18 ? 'Você e maior de idade' : 'Você e menor de idade';
console.log(resultado)

const verificarIdade = function(idade){
    return idade >= 18 ? 'Você e maior de idade' : 'Você e menor de idade'
}
console.log(verificarIdade(18));

const verificarString = function(nome){
    return nome === 'Rafael'? 'Vocé e o Rafael' : 'Quem é você?'
}
console.log(verificarString('Rafael'));

