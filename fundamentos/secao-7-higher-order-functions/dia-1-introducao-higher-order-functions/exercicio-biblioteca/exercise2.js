const books = require('./books')

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName());