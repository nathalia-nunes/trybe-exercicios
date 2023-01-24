//const num1 = 10;
//const num2 = 23;

//if (num1 > num2) {
//    console.log('num1 é maior que num2');
//} else {console.log('num2 é maior que num1');}

//const num1 = 9;
//const num2 = 90;
//const num3 = 2;

//const numero = 2;

//if (numero > 0) {
//    console.log('positive');
//} else if (numero < 0) {
//    console.log('negative');
//} else {
//   console.log('zero');
//}

const angulo1 = 100;
const angulo2 = 15;
const angulo3 = 65;

let somaDosAngulos = angulo1 + angulo2 + angulo3;
let anguloPositivo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (anguloPositivo) {
if (somaDosAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
}; 
} else {
    console.log("erro: ângulo inválido!");
}
