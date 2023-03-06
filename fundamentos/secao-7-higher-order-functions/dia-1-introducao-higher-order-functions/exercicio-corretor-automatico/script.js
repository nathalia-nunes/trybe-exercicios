const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuaExame = (gabarito, resposta) => {
  if (gabarito === resposta) {
    return 1;
  }
  if (resposta === 'N.A') {
    return 0;
  }
  return -0.5;
};

const corretorExames = (corretas, respostaAluno, pontuaExame) => {
  let notaAluno = 0;
  corretas.forEach((questao, index) => {
    notaAluno += pontuaExame(questao, respostaAluno[index])
  });
  return notaAluno;
};
console.log(corretorExames(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuaExame));