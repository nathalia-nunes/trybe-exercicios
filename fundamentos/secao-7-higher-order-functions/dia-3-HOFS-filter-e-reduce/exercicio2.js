const countries = require('./countries');

const expectedResult = 4311757;
const getTotalArea = () => 
countries.reduce((resultado, country) => resultado + country.area, 0);
