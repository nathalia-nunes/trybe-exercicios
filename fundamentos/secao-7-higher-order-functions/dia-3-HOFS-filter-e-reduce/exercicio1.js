const countries = require('./countries');


// 1 - Calcule a quantidade total da população de todos os países.

// De olho na dica 👀: o valor inicial deve começar com 0, 
// portanto o acumulador é um número.

const expectedResult = 120797034;
const getPopulation = () => 
 countries.reduce((resultado, country) => 
  resultado + country.population, 0);
 