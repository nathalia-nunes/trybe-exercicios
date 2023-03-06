const books = require('./books')

const expectedResult = false;

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
// todos tem que atender
// alguem tem que atender 
// se os dois autores tem a mesma data de nascimento 
// + os nomes são diferentes
// logo, nega o some para que o every retorne false 