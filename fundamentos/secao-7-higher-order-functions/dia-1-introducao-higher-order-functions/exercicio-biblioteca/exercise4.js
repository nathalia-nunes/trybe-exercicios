const books = require('./books')

const expectedResult = false;

const everyoneWasBornOnSecXX = () =>
  // escreva seu código aqui
  books.every((book) => 
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  )

console.log(everyoneWasBornOnSecXX());