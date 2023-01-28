// Requisito 1
const girafa = true;
const elefante = true;
const macaco = false;

const compareTrue = (animal1, animal2) => {
    if (animal1 && animal2 === true) {
        return true;
    } else if (animal1 && animal2 === false) {
        return false;
    } else (animal1 === false && animal2 === true)
        return false;
    }

console.log(compareTrue(elefante, macaco));

// Requisito 2
const splitSentence = (palavra) => {
    let array = palavra.split(" ");
    return array
}
console.log(splitSentence('go trybe'));
