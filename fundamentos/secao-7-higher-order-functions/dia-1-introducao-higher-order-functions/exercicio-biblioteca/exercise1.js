const books = require('./books')

const expectedResult = 'Stephen King';
const authorBornIn1947 = () =>
  // escreva aqui o seu código
  books.find((book) =>
    book.author.birthYear === 1947).author.name;

  console.log(authorBornIn1947());