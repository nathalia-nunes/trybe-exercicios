// Requisito 1

const girafa = true;
const elefante = true;
const macaco = false;
//const compareTrue = (animal1, animal2) => animal1 && animal2;

const compareTrue = (animal1, animal2) => {
    if (animal1 && animal2 === true) {
        return true;
    } else if (animal1 && animal2 === false) {
        return false;
    }
}
console.log(compareTrue(macaco, macaco));


// Requisito 2

const splitSentence = (palavra) => {
    let array = palavra.split(" ");
    return array
}
console.log(splitSentence('go trybe'));

const splitSentence = (palavra) => palavra.split(" ");
console.log(splitSentence('go trybe'));

// Requisito 3

const concatName = (array) => {
    let ultimaPalavra = array[array.length - 1];
    let primeiraPalavra = array[0];
    return `${ultimaPalavra}, ${primeiraPalavra}`;
}
console.log(concatName(['lucas', 'joao', 'francisco']));

//const concatName = (array) => `${array[array.length-1]}, ${array[0]}`;  
//console.log(concatName(['lucas', 'joao', 'francisco']));

// Requisito 4
const footballPoints = (wins, ties) => wins * 3 + ties;

console.log(footballPoints(14, 8));

// Requisito 5 
const highestCount = (arrayNumero) => {
    let maiorNumero = arrayNumero[0];
    for (let index = 0; index < arrayNumero.length; index += 1) {
        if (arrayNumero[index] > maiorNumero) {
            maiorNumero = arrayNumero[index];
        } 
    } 
    let numeroRepete = 0;
    for (let index = 0; index < arrayNumero.length; index += 1) {
        if (maiorNumero === arrayNumero[index]) {
            numeroRepete += 1;
        }
    } return numeroRepete;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));