let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : {
        golden : 2,
        silver : 3
    }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade.');

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let name in names) {
    console.log("Olá " + names[name])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car) {
    console.log(index + ': ' + car[index]);
  }

  function sum(a, b) {
    a + b;
  }
  console.log(sum(1, 2));
  