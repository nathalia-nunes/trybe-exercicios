const countries = require('./countries');


// 3 - Encontre o país com o maior nome.

// De olho na dica 👀: o reduce consegue comparar o valor do primeiro 
// com o segundo parâmetro. Compare o tamanho da string name do
//  primeiro parâmetro com a do segundo parâmetro e retorne aquele que 
//  for maior.


const expectedResult = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}
const longestName = () => 
  countries.reduce((country1, country2) => 
    country1.name.length > country2.name.length ? country1 : country2);
