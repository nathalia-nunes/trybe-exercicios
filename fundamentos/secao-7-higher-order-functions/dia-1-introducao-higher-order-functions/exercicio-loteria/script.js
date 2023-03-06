const verificaNumero = (num1, num2) => num1 === num2;

const resultadoSorteio = (numero, verificaNumero) => {
  const numeroAleatorio = Math.floor(Math.random() * 5 + 1);
  if (verificaNumero(numeroAleatorio, numero)) {
    return 'Parabéns, você ganhou'
  } 
  return 'Tente novamente'
};
console.log(resultadoSorteio(3, verificaNumero));