const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, name) => {
  //Adicione seu código aqui
  return array.some((buscaNome) => buscaNome === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui
  const verificaIdade = (array, idadeMinima) => array.every((pessoa) =>  pessoa.age >= idadeMinima);
    // console.log(verificaIdade(array, idadeMinima));
// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
// people.sort((a, b) => a.name > b.name ? 1 : -1);

people.sort((pessoaA, pessoaB) => pessoaB.age - pessoaA.age);

console.log(people);