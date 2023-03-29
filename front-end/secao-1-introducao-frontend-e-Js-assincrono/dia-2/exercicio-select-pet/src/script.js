import Swal from 'sweetalert2';
const imgPet = document.querySelector('#img-pet');
const URL_DOG = 'https://dog.ceo/api/breeds/image/random';
const URL_CAT = 'https://aws.random.cat/meow';
const alerta = () => Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Não foi possível encontrar o herói!',
  footer: 'Tente outra vez',
});

const getRandomDog = () => {
  fetch(URL_DOG)
  .then((response) => response.json())
  .then(({message}) => {
    imgPet.src = message;
  })
  .catch(() => alerta());
}
const btnDog = document.querySelector('#btnDog');
btnDog.addEventListener('click', getRandomDog);

const getRandomCat = () => {
  fetch(URL_CAT)
  .then((response) => response.json())
  .then(({file}) => {
    imgPet.src = file;
  })
  .catch(() => alerta());
}
const btnCat = document.querySelector('#btnCat');
btnCat.addEventListener('click', getRandomCat);