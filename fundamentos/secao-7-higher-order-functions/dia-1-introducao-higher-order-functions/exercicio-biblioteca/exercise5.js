const books = require('./books')

const expectedResult = true;

const someBookWasReleaseOnThe80s = () =>
  // escreva seu código aqui
  books.some((book) =>
    book.releaseYear >= 1980 && book.releaseYear <= 1989
  )

console.log(someBookWasReleaseOnThe80s());