
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;
const countA = () => 
  names.join('').toLowerCase().split('')
  .reduce((resultado, letra) => 
  letra === 'a' ? resultado + 1 : resultado, 0);
